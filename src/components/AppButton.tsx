import "./AppButton.css";


interface AppButtonProps {
    label: string;
    onClick: () => void;
    relativePosition?: boolean;
}

export const AppButton = ({label, onClick, relativePosition}: AppButtonProps) => {
    return (
        <div className={`cyber-button ${relativePosition ? "relative-button" : ""}`} onClick={onClick}>
            <span className="cyber-button__text">{label}</span>
            <span className="cyber-button__glitch"></span>
        </div>
    )
}
