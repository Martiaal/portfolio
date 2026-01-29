import "./AppButton.css";


interface AppButtonProps {
    label: string;
    onClick: () => void;
}

export const AppButton = ({label, onClick}: AppButtonProps) => {
    return (
        <div className="cyber-button" onClick={onClick}>
            <span className="cyber-button__text">{label}</span>
            <span className="cyber-button__glitch"></span>
        </div>
    )
}
