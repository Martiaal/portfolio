import "../Experience.css";
import type { ExpItem } from "../../../types/types.ts";

interface ExperienceCardProps {
    exp: ExpItem;
}

export const ExperienceCard = ({exp}: ExperienceCardProps) => {
    return (
        <div className={`timeline-item ${exp.type}`}>
            <div className="timeline-date">
                <span className="date-text">{exp.year}</span>
                <div className="date-dot"></div>
            </div>

            <div className="timeline-card">
                <div className="card-tag">{exp.type === "work" ? "CORP_LOG" : "EDU_LOG"}</div>
                <h3 className="card-title">{exp.title}</h3>
                <p className="card-subtitle">{exp.subtitle}</p>
                <div className="card-corner"></div>
            </div>
        </div>
    )
}
