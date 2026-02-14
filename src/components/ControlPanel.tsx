import "./ControlPanel.css";
import type {CSSProperties, ReactNode} from "react";

interface ControlPanelProps {
    title: string;
    footerVal: string;
    children?: ReactNode;
}


export const ControlPanel = (
    {children, title, footerVal}: ControlPanelProps
) => {
    return (
        <div className="game-controls-panel">
            <div className="panel-header">
                <div className="panel-title">{title}</div>
                <div className="panel-barcode"></div>
            </div>

            {children}

            <div className="panel-footer">
                <div className="footer-line"></div>
                <div className="footer-info">
                    <span>{footerVal}</span>
                </div>
            </div>
        </div>
    )
}


interface ControlSectionProps {
    title: string;
    children?: ReactNode;
}

export const ControlSection = (
    {children, title}: ControlSectionProps
) => {
    return (
        <div className="control-section">
            <div className="section-title">{title}</div>
            {children}
        </div>
    )
}


interface KeyControlProps {
    keyValue: string;
    isWide?: boolean;
}

export const KeyControl = (
    {keyValue, isWide = false}: KeyControlProps
) => {
    return (
        <div className={`key ${isWide ? "wide" : ""}`}>
            {keyValue}
        </div>
    )
}


interface KeyControlItemProps {
    keyValue: string;
    actionLabel: string;
    isWide?: boolean;
}

export const KeyControlItem = (
    {keyValue, actionLabel, isWide = false}: KeyControlItemProps
) => {
    return (
        <div className="control-item">
            <KeyControl keyValue={keyValue} isWide={isWide}/>
            <span className="action-label">{actionLabel}</span>
        </div>
    )
}


interface ControlItemProps {
    label: string;
    icon?: string;
}

export const ControlItem = (
    {label, icon}: ControlItemProps
) => {
    return (
        <div className="control-item">
            {icon &&
                <img src={icon} alt={icon} className="control-icon"/>
            }
            <span className="engine-text">{label}</span>
        </div>
    )
}

interface StatusBadgeProps {
    label: string;
    type?: "default" | "warning" | "success";
}

export const StatusBadge = ({ label, type = "default" }: StatusBadgeProps) => {
    return <span className={`status-badge ${type}`}>{label}</span>;
}

interface ColorIndicatorProps {
    colors: string[];
}

export const ColorIndicator = ({ colors }: ColorIndicatorProps) => {
    return (
        <div className="color-indicator-group">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="color-dot"
                    style={{ '--dot-color': color } as CSSProperties}
                />
            ))}
        </div>
    );
}


interface RoleBadgeProps {
    role: string;
}

export const RoleBadge = ({ role }: RoleBadgeProps) => {
    return (
        <div className="role-badge">
            <div className="role-dot"></div>
            <span className="role-text">{role}</span>
        </div>
    );
}

interface TechStackProps {
    techs: string[];
}

export const TechStack = ({ techs }: TechStackProps) => {
    return (
        <div className="tech-stack">
            {techs.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
            ))}
        </div>
    );
}

interface DataCounterProps {
    label: string;
    value: string;
}

export const DataCounter = ({ label, value }: DataCounterProps) => {
    return (
        <div className="data-counter">
            <span className="counter-label">{label}</span>
            <span className="counter-value">{value}</span>
        </div>
    );
}
