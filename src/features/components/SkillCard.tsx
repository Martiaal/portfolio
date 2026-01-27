import "./Skills.css";

interface SkillCardProps {
    name: string;
    logo: string;
    level: number;
}

export const SkillCard = ({ name, logo, level }: SkillCardProps) => {
    return (
        <div className="skill-module">
            <div className="skill-header">
                <img src={logo} alt={name} className="skill-icon" />
                <h3 className="skill-name">{name}</h3>
                <span className="skill-id">ID_{name.substring(0, 3).toUpperCase()}</span>
            </div>

            <div className="skill-level-container">
                <div className="skill-level-header">
                    <span className="skill-label">EXPÉRIENCE</span>
                    <span className="skill-level-percentage">{level}%</span>
                </div>
                <div className="skill-level-bar">
                    <div
                        className="skill-level-progress"
                        style={{ width: `${level}%` }}
                    ></div>
                </div>
            </div>

            {/* Détails décoratifs Cyberpunk */}
            <div className="skill-corner-top"></div>
            <div className="skill-corner-bottom"></div>
        </div>
    );
};
