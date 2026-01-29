import type {SoftSkill} from "../../../types/types.ts";
import "../SoftSkills.css";

interface SoftSkillCardProps {
    skill: SoftSkill;
}

export const SoftSkillCard = ( {skill} : SoftSkillCardProps) => {
    return (
        <div className="soft-skill-card">
            <div className="soft-skill-scanner"></div>
            <div className="soft-skill-content">
                <div className="soft-skill-header">
                    <span className="soft-skill-code">{skill.code}</span>
                    <h3 className="soft-skill-label">{skill.label}</h3>
                </div>
                <p className="soft-skill-desc">{skill.description}</p>
            </div>
            <div className="soft-skill-decoration">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
