import {SkillCard} from "./SkillCard.tsx";
import type {SkillTitles} from "../../../types/types.ts";
import "../Skills.css";

interface SkillSectionProps {
    section: SkillTitles;
    onSkillClick: (skillName: string) => void;
}

export const SkillSection = ({ section, onSkillClick }: SkillSectionProps) => {
    return (
        <div key={section.subtitle} className="skills-content">
            <div className="skills-grid">
                {section.skills.map((skill) => (
                    <SkillCard
                        key={skill.name}
                        name={skill.name}
                        logo={skill.logo}
                        level={skill.level}
                        onClick={() => onSkillClick(skill.name)}
                    />
                ))}
            </div>
        </div>
    )
}
