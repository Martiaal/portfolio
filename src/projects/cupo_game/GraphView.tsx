import React, {
    useRef,
    useEffect,
    useState,
    useCallback,
    useMemo,
} from 'react';
import './GraphView.css';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Node {
    title: string;
    elements: string[];
}

export interface NodeLink {
    from: string;
    to: string;
    label?: string;
}

interface GraphViewProps {
    nodes: Node[];
    links: NodeLink[];
    title?: string;
    description?: string;
    height?: string;
}

// ─── Layout constants ─────────────────────────────────────────────────────────

const NODE_W       = 168;
const TITLE_H      = 38;
const ELEM_H       = 18;
const ELEM_PAD_TOP = 10;
const ELEM_PAD_BOT = 12;
const IDEAL_DIST   = 420;
const REPULSION    = 35_000;
const SPRING       = 0.03;
const DAMP         = 0.72;
const GRAVITY      = 0.008;
const ALPHA_DECAY  = 0.015;

function nodeH(n: Node) {
    return TITLE_H + ELEM_PAD_TOP + n.elements.length * ELEM_H + ELEM_PAD_BOT;
}

// ─── Simulation node (mutable) ────────────────────────────────────────────────

interface SimNode {
    id: string;
    x: number;
    y: number;
    vx: number;
    vy: number;
    w: number;
    h: number;
    pinned: boolean;
}

// ─── Force simulation (runs outside React render) ────────────────────────────

class ForceGraph {
    sims: SimNode[];
    links: NodeLink[];
    alpha: number;

    constructor(nodes: Node[], links: NodeLink[], W: number, H: number) {
        this.links = links;
        this.alpha = 1;

        // Arrange in a circle initially to avoid big initial overlaps
        const count = nodes.length;
        const radius = Math.min(W, H) * 0.32;
        this.sims = nodes.map((n, i) => {
            const angle = (i / count) * Math.PI * 2;
            return {
                id: n.title,
                x: W / 2 + radius * Math.cos(angle),
                y: H / 2 + radius * Math.sin(angle),
                vx: 0,
                vy: 0,
                w: NODE_W,
                h: nodeH(n),
                pinned: false,
            };
        });
    }

    byId(id: string) {
        return this.sims.find((s) => s.id === id);
    }

    tick(cx: number, cy: number) {
        if (this.alpha < 0.001) return;

        const { sims, links, alpha } = this;

        // Repulsion (node–node)
        for (let i = 0; i < sims.length; i++) {
            for (let j = i + 1; j < sims.length; j++) {
                const a = sims[i];
                const b = sims[j];
                const dx = b.x - a.x;
                const dy = b.y - a.y;
                const dist2 = dx * dx + dy * dy || 1;
                const force = (REPULSION * alpha) / dist2;
                const nx = dx / Math.sqrt(dist2);
                const ny = dy / Math.sqrt(dist2);
                if (!a.pinned) { a.vx -= nx * force; a.vy -= ny * force; }
                if (!b.pinned) { b.vx += nx * force; b.vy += ny * force; }
            }
        }

        // Spring (links)
        for (const link of links) {
            const a = this.byId(link.from);
            const b = this.byId(link.to);
            if (!a || !b) continue;
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const stretch = dist - IDEAL_DIST;
            const force = SPRING * stretch * alpha;
            const nx = dx / dist;
            const ny = dy / dist;
            if (!a.pinned) { a.vx += nx * force; a.vy += ny * force; }
            if (!b.pinned) { b.vx -= nx * force; b.vy -= ny * force; }
        }

        // Center gravity
        for (const s of sims) {
            if (s.pinned) continue;
            s.vx += (cx - s.x) * GRAVITY * alpha;
            s.vy += (cy - s.y) * GRAVITY * alpha;
        }

        // Integrate + damp
        for (const s of sims) {
            if (s.pinned) continue;
            s.vx *= DAMP;
            s.vy *= DAMP;
            s.x += s.vx;
            s.y += s.vy;
        }

        this.alpha = Math.max(0, this.alpha - ALPHA_DECAY);
    }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Compute edge endpoint on the border of a node rect, toward target center */
function edgePoint(
    sx: number, sy: number, sw: number, sh: number,
    tx: number, ty: number,
) {
    const dx = tx - sx;
    const dy = ty - sy;
    const halfW = sw / 2 + 4;
    const halfH = sh / 2 + 4;

    if (dx === 0 && dy === 0) return { x: sx, y: sy };

    const scaleX = halfW / Math.abs(dx || 1e-9);
    const scaleY = halfH / Math.abs(dy || 1e-9);
    const scale  = Math.min(scaleX, scaleY);

    return { x: sx + dx * scale, y: sy + dy * scale };
}

// ─── Component ────────────────────────────────────────────────────────────────

const GraphView: React.FC<GraphViewProps> = ({ nodes, links, title = 'NODE MAP', description, height="800px" }) => {
    const containerRef  = useRef<HTMLDivElement>(null);
    const svgRef        = useRef<SVGSVGElement>(null);
    const simRef        = useRef<ForceGraph | null>(null);
    const rafRef        = useRef<number>(0);
    const tickCount     = useRef(0);

    // SVG canvas size
    const [size, setSize] = useState({ w: 900, h: 600 });

    // Render positions (updated from sim)
    const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>({});

    // Pan state
    const [pan, setPan]   = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const isPanning       = useRef(false);
    const panStart        = useRef({ x: 0, y: 0, px: 0, py: 0 });

    // Drag state
    const dragging        = useRef<string | null>(null);
    const dragOffset      = useRef({ x: 0, y: 0 });

    // Active (highlighted) node
    const [activeNode, setActiveNode] = useState<string | null>(null);

    // ── Resize observer ──────────────────────────────────────────────────────────
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        // Snapshot initial size immediately (before first paint)
        setSize({ w: el.clientWidth, h: el.clientHeight });
        const ro = new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
            // Guard: only update if size actually changed to avoid feedback loops
            setSize((prev) => {
                if (Math.abs(prev.w - width) < 1 && Math.abs(prev.h - height) < 1) return prev;
                return { w: width, h: height };
            });
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    // ── Build / rebuild simulation when nodes/links change ───────────────────────
    useEffect(() => {
        if (!nodes.length) return;
        simRef.current = new ForceGraph(nodes, links, size.w, size.h);

        // Snapshot initial positions
        const init: Record<string, { x: number; y: number }> = {};
        simRef.current.sims.forEach((s) => { init[s.id] = { x: s.x, y: s.y }; });
        setPositions(init);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nodes, links]);

    // ── Simulation loop ──────────────────────────────────────────────────────────
    useEffect(() => {
        const loop = () => {
            const sim = simRef.current;
            if (!sim) { rafRef.current = requestAnimationFrame(loop); return; }

            sim.tick(size.w / 2, size.h / 2);
            tickCount.current++;

            // Throttle re-renders: every 2 frames during active sim, then stop
            if (tickCount.current % 2 === 0) {
                const snap: Record<string, { x: number; y: number }> = {};
                sim.sims.forEach((s) => { snap[s.id] = { x: s.x, y: s.y }; });
                setPositions({ ...snap });
            }

            rafRef.current = requestAnimationFrame(loop);
        };

        rafRef.current = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(rafRef.current);
    }, [size]);

    // ── SVG coordinate helpers ───────────────────────────────────────────────────
    const svgPoint = useCallback((clientX: number, clientY: number) => {
        const svg = svgRef.current;
        if (!svg) return { x: 0, y: 0 };
        const rect = svg.getBoundingClientRect();
        return {
            x: (clientX - rect.left - pan.x) / zoom,
            y: (clientY - rect.top  - pan.y) / zoom,
        };
    }, [pan, zoom]);

    // ── Drag ─────────────────────────────────────────────────────────────────────
    const onNodePointerDown = useCallback((e: React.PointerEvent, id: string) => {
        e.stopPropagation();
        // Capture on the SVG root so onPointerMove/Up on the SVG always fire
        svgRef.current?.setPointerCapture(e.pointerId);
        dragging.current = id;
        setActiveNode(id);

        const sim = simRef.current;
        if (!sim) return;
        const s = sim.byId(id);
        if (!s) return;
        s.pinned = true;
        sim.alpha = Math.max(sim.alpha, 0.3); // reheat a bit

        const pt = svgPoint(e.clientX, e.clientY);
        dragOffset.current = { x: pt.x - s.x, y: pt.y - s.y };
    }, [svgPoint]);

    const onPointerMove = useCallback((e: React.PointerEvent) => {
        const sim = simRef.current;

        if (dragging.current && sim) {
            const pt  = svgPoint(e.clientX, e.clientY);
            const s   = sim.byId(dragging.current);
            if (s) {
                s.x = pt.x - dragOffset.current.x;
                s.y = pt.y - dragOffset.current.y;
                s.vx = 0; s.vy = 0;
            }
            return;
        }

        if (isPanning.current) {
            setPan({
                x: panStart.current.px + e.clientX - panStart.current.x,
                y: panStart.current.py + e.clientY - panStart.current.y,
            });
        }
    }, [svgPoint]);

    const onPointerUp = useCallback(() => {
        const sim = simRef.current;
        if (dragging.current && sim) {
            const s = sim.byId(dragging.current);
            if (s) s.pinned = false;
            dragging.current = null;
        }
        isPanning.current = false;
    }, []);

    const onSvgPointerDown = useCallback((e: React.PointerEvent) => {
        if ((e.target as Element).closest('.gv-node')) return;
        isPanning.current = true;
        panStart.current = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y };
        setActiveNode(null);
    }, [pan]);

    // ── Reset view ───────────────────────────────────────────────────────────────
    const resetView = useCallback(() => {
        setPan({ x: 0, y: 0 });
        setZoom(1);
        const sim = simRef.current;
        if (sim) {
            sim.alpha = 0.8;
        }
    }, []);

    // ── Node lookup for rendering ─────────────────────────────────────────────────
    const nodeMap = useMemo(() => {
        const m: Record<string, Node> = {};
        nodes.forEach((n) => { m[n.title] = n; });
        return m;
    }, [nodes]);

    // Active neighbours for dimming
    const activeNeighbours = useMemo(() => {
        if (!activeNode) return null;
        const set = new Set<string>([activeNode]);
        links.forEach((l) => {
            if (l.from === activeNode) set.add(l.to);
            if (l.to   === activeNode) set.add(l.from);
        });
        return set;
    }, [activeNode, links]);

    // ─────────────────────────────────────────────────────────────────────────────

    return (
        <div className="gv-wrapper" ref={containerRef} style={{ height: height }}>

            {/* HUD header */}
            <div className="gv-hud-top">
                <div className="gv-hud-left">
                    <span className="gv-deco-block" />
                    <span className="gv-prefix">SYS // GRAPH</span>
                    <span className="gv-title">{title}</span>
                    {description && (
                        <span className="gv-description">{description}</span>
                    )}
                </div>
                <div className="gv-hud-right">
          <span className="gv-stat">
            <span className="gv-stat-val">{nodes.length}</span> NODES
          </span>
                    <span className="gv-stat">
            <span className="gv-stat-val">{links.length}</span> LINKS
          </span>
                    <button className="gv-btn" onClick={resetView}>RESET</button>
                </div>
            </div>

            {/* SVG canvas */}
            <svg
                ref={svgRef}
                className="gv-svg"
                width={size.w}
                height={size.h}
                onPointerDown={onSvgPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                style={{ cursor: isPanning.current ? 'grabbing' : 'grab' }}
            >
                <defs>
                    {/* Arrow marker */}
                    <marker
                        id="gv-arrow"
                        markerWidth="8"
                        markerHeight="8"
                        refX="7"
                        refY="3"
                        orient="auto"
                    >
                        <path d="M0,0 L0,6 L8,3 z" fill="var(--secondary-color)" opacity="0.7" />
                    </marker>

                    {/* Active arrow marker */}
                    <marker
                        id="gv-arrow-active"
                        markerWidth="8"
                        markerHeight="8"
                        refX="7"
                        refY="3"
                        orient="auto"
                    >
                        <path d="M0,0 L0,6 L8,3 z" fill="var(--third-color)" />
                    </marker>

                    {/* Node glow filter */}
                    <filter id="gv-glow" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Scanlines overlay */}
                <pattern id="gv-scanlines" x="0" y="0" width="2" height="4" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="2" height="2" fill="rgba(0,240,255,0.015)" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#gv-scanlines)" pointerEvents="none" />

                <g transform={`translate(${pan.x},${pan.y}) scale(${zoom})`}>

                    {/* ── Edges ─────────────────────────────────────────────────────── */}
                    <g className="gv-edges">
                        {links.map((link, i) => {
                            const simA = simRef.current?.byId(link.from);
                            const simB = simRef.current?.byId(link.to);
                            const posA = positions[link.from];
                            const posB = positions[link.to];
                            if (!simA || !simB || !posA || !posB) return null;

                            const hA = nodeH(nodeMap[link.from] || { title: '', elements: [] });
                            const hB = nodeH(nodeMap[link.to]   || { title: '', elements: [] });

                            const ptA = edgePoint(posA.x, posA.y, NODE_W, hA, posB.x, posB.y);
                            const ptB = edgePoint(posB.x, posB.y, NODE_W, hB, posA.x, posA.y);

                            const isActive =
                                activeNode === link.from || activeNode === link.to;
                            const isDimmed = activeNode !== null && !isActive;

                            // Midpoint for label
                            const mx = (ptA.x + ptB.x) / 2;
                            const my = (ptA.y + ptB.y) / 2;

                            return (
                                <g key={i} className={`gv-edge${isActive ? ' active' : ''}${isDimmed ? ' dimmed' : ''}`}>
                                    <line
                                        x1={ptA.x} y1={ptA.y}
                                        x2={ptB.x} y2={ptB.y}
                                        markerEnd={isActive ? 'url(#gv-arrow-active)' : 'url(#gv-arrow)'}
                                    />
                                    {link.label && (
                                        <g>
                                            <rect
                                                x={mx - link.label.length * 3.5}
                                                y={my - 8}
                                                width={link.label.length * 7}
                                                height={16}
                                                className="gv-edge-label-bg"
                                            />
                                            <text x={mx} y={my + 4} className="gv-edge-label">
                                                {link.label}
                                            </text>
                                        </g>
                                    )}
                                </g>
                            );
                        })}
                    </g>

                    {/* ── Nodes ─────────────────────────────────────────────────────── */}
                    <g className="gv-nodes">
                        {nodes.map((node) => {
                            const pos = positions[node.title];
                            if (!pos) return null;

                            const h   = nodeH(node);
                            const x   = pos.x - NODE_W / 2;
                            const y   = pos.y - h / 2;
                            const isActive  = activeNode === node.title;
                            const isDimmed  = activeNeighbours !== null && !activeNeighbours.has(node.title);
                            const clipId    = `gv-clip-${node.title.replace(/\s+/g, '_')}`;

                            return (
                                <g
                                    key={node.title}
                                    className={`gv-node${isActive ? ' active' : ''}${isDimmed ? ' dimmed' : ''}`}
                                    transform={`translate(${x},${y})`}
                                    onPointerDown={(e) => onNodePointerDown(e, node.title)}
                                    style={{ cursor: 'grab' }}
                                >
                                    {/* Clip path for the angled cut */}
                                    <clipPath id={clipId}>
                                        <polygon points={`0,0 ${NODE_W},0 ${NODE_W},${h - 14} ${NODE_W - 14},${h} 0,${h}`} />
                                    </clipPath>

                                    {/* Shadow / glow */}
                                    {isActive && (
                                        <polygon
                                            points={`-3,-3 ${NODE_W + 3},-3 ${NODE_W + 3},${h - 14 + 3} ${NODE_W - 14 + 3},${h + 3} -3,${h + 3}`}
                                            className="gv-node-glow"
                                        />
                                    )}

                                    {/* Background */}
                                    <polygon
                                        points={`0,0 ${NODE_W},0 ${NODE_W},${h - 14} ${NODE_W - 14},${h} 0,${h}`}
                                        className="gv-node-bg"
                                    />

                                    {/* Title bar */}
                                    <rect x={0} y={0} width={NODE_W} height={TITLE_H} className="gv-node-title-bar" />

                                    {/* Corner accent (bottom left) */}
                                    <rect x={0} y={h - 4} width={24} height={4} className="gv-node-accent" />

                                    {/* Clip group for content */}
                                    <g clipPath={`url(#${clipId})`}>
                                        {/* Title text */}
                                        <text x={10} y={TITLE_H - 10} className="gv-node-title">
                                            {node.title.toUpperCase()}
                                        </text>

                                        {/* Elements */}
                                        {node.elements.map((el, ei) => (
                                            <g key={ei}>
                                                <rect
                                                    x={8}
                                                    y={TITLE_H + ELEM_PAD_TOP + ei * ELEM_H + 1}
                                                    width={4}
                                                    height={ELEM_H - 6}
                                                    className="gv-elem-bullet"
                                                />
                                                <text
                                                    x={20}
                                                    y={TITLE_H + ELEM_PAD_TOP + ei * ELEM_H + ELEM_H - 5}
                                                    className="gv-elem-text"
                                                >
                                                    {el}
                                                </text>
                                            </g>
                                        ))}
                                    </g>

                                    {/* Screw decorations */}
                                    <circle cx={5}  cy={5}  r={2} className="gv-screw" />
                                    <circle cx={NODE_W - 5} cy={5} r={2} className="gv-screw" />
                                </g>
                            );
                        })}
                    </g>

                </g>

                {/* HUD corners */}
                <rect x={0} y={0} width={18} height={3}  className="gv-corner-line" />
                <rect x={0} y={0} width={3}  height={18} className="gv-corner-line" />
                <rect x={size.w - 18} y={0} width={18} height={3}  className="gv-corner-line" />
                <rect x={size.w - 3}  y={0} width={3}  height={18} className="gv-corner-line" />
                <rect x={0} y={size.h - 3} width={18} height={3}  className="gv-corner-line" />
                <rect x={0} y={size.h - 18} width={3}  height={18} className="gv-corner-line" />
            </svg>

            {/* HUD bottom bar */}
            <div className="gv-hud-bottom">
                <span className="gv-hint">SCROLL · zoom &nbsp;|&nbsp; DRAG canvas · pan &nbsp;|&nbsp; DRAG node · move &nbsp;|&nbsp; CLICK node · focus</span>
                <span className="gv-zoom-label">ZOOM {Math.round(zoom * 100)}%</span>
            </div>
        </div>
    );
};

export default GraphView;
