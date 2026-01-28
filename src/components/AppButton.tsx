import "./AppButton.css";


interface AppButtonProps {
    label: string;
    tag?: string;
    onClick: () => void;
}

export const AppButton = ({label, tag, onClick}: AppButtonProps) => {
    return (
        <div className="cyber-button" onClick={onClick}>
            <span className="cyber-button__text">{label}</span>
            <span className="cyber-button__glitch"></span>
            <span className="cyber-button__tag">{tag ?? ""}</span>
        </div>
    )
}
