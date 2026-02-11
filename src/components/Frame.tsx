import "./Frame.css";


interface FrameProps {
    src: string;
    title: string;
    width?: string;
    height?: string;
}


export const Frame = (
    {src, title, width="800", height="600"}: FrameProps
) => {
    return (
        <div className="game-frame-container">
            <div className="frame-corner frame-corner-tl"></div>
            <div className="frame-corner frame-corner-tr"></div>
            <div className="frame-corner frame-corner-bl"></div>
            <div className="frame-corner frame-corner-br"></div>

            <iframe
                title={title}
                src={src}
                width={width}
                height={height}
                className="game-iframe"
                allow="autoplay; fullscreen"
            />

            <div className="game-scanline"></div>
        </div>
    )
}
