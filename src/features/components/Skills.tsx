import { SkillCard } from "./SkillCard";
import type { SkillsData } from "../types.ts"
import skillsData from "../datas/skills.json";
import "./Skills.css";

export const Skills = () => {
    return (
        <section id="skills" className="second-container">
            <div className="main-title" data-text={"Mes compétences"}>
                Mes compétences
            </div>
            {
                skillsData.map((section: SkillSectionProps) => (
                    <SkillSections
                        key={section.subtitle}
                        subtitle={section.subtitle}
                        skills={section.skills}
                    />
                ))
            }
        </section>
    );
};

interface SkillSectionProps {
    subtitle: string;
    skills: SkillsData[];
}

const SkillSections = ({ subtitle, skills }: SkillSectionProps) => {
    return (
        <>
            <span className={"subtitle"} style={{ marginBottom: "1rem" }}>{subtitle}</span>
            <div className="skills-grid">
                {skills.map((skill) => (
                    <SkillCard
                        key={skill.name}
                        name={skill.name}
                        logo={skill.logo}
                        level={skill.level}
                    />
                ))}
            </div>
        </>
    )
}
