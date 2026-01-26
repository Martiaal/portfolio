import { SkillCard } from "./SkillCard";
import type { SkillsData } from "../types.ts"
import skillsData from "../datas/skills.json";
import "./Skills.css";

export const Skills = () => {
    return (
        <section id="skills" className="second-container">
            {
                skillsData.map((section: SkillSectionProps) => (
                    <SkillSections
                        key={section.subtitle}
                        title={section.title}
                        subtitle={section.subtitle}
                        skills={section.skills}
                    />
                ))
            }
        </section>
    );
};

interface SkillSectionProps {
    title: string|undefined;
    subtitle: string;
    skills: SkillsData[];
}

const SkillSections = ({ title, subtitle, skills }: SkillSectionProps) => {
    return (
        <>
            <div className="main-title" data-text={title ?? ""}>
                {title} <span className={"subtitle"}>{subtitle}</span>
            </div>
            <div className="skills-grid">
                {skills.map((skill) => (
                    <SkillCard
                        key={skill.name}
                        name={skill.name}
                        logo={skill.logo}
                        description={skill.description}
                        level={skill.level}
                    />
                ))}
            </div>
        </>
    )
}
