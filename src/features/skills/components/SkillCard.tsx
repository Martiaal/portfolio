import "../Skills.css";

interface SkillCardProps {
    name: string;
    logo: string;
    level: number;
    onClick: () => void;
}

export const SkillCard = ({ name, logo, level, onClick }: SkillCardProps) => {
    return (
        <div className="skill-module-yellow" onClick={onClick}>
            <div className="skill-card-top">
                <div className="skill-icon-wrapper">
                    <img src={logo} alt={name} className="skill-icon-dark" />
                </div>
                <div className="skill-info">
                    <span className="skill-id-dark">TYPE_MODULE // {name.substring(0, 3).toUpperCase()}</span>
                    <h3 className="skill-name-dark">{name}</h3>
                </div>
            </div>

            <div className="skill-level-section">
                <div className="skill-level-meta">
                    <span className="skill-label-dark">Expérience</span>
                    <span className="skill-percent-dark">{level}%</span>
                </div>
                <div className="skill-bar-bg">
                    <div
                        className="skill-bar-fill"
                        style={{ width: `${level}%` }}
                    ></div>
                </div>
            </div>

            {/* Décorations visuelles style hardware */}
            <div className="card-screw tl"></div>
            <div className="card-screw tr"></div>
            <div className="card-tech-lines"></div>
        </div>
    );
};