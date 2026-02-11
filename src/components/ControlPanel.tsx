import "./ControlPanel.css";
import type {ReactNode} from "react";

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
