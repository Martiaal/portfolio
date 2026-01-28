import { useState } from "react";
import { SkillCard } from "./SkillCard.tsx";
import "./Skills.css";
import type {SkillTitles} from "../../types/types.ts"

interface SkillsProps {
    skills: SkillTitles[];
}

export const Skills = ({ skills }: SkillsProps) => {
    // On initialise avec la première catégorie du JSON
    const [activeTab, setActiveTab] = useState(skills[0].subtitle);

    return (
        <section id="skills" className="second-container">
            <div className="main-title" data-text={"Mes compétences"}>
                Mes compétences
            </div>

            {/* Menu de sélection des catégories */}
            <div className="skills-nav">
                {skills.map((section: SkillTitles) => (
                    <button
                        key={section.subtitle}
                        className={`nav-btn ${activeTab === section.subtitle ? "active" : ""}`}
                        onClick={() => setActiveTab(section.subtitle)}
                    >
                        {section.subtitle}
                    </button>
                ))}
            </div>

            {/* Affichage de la section active uniquement */}
            {skills
                .filter((section: SkillTitles) => section.subtitle === activeTab)
                .map((section: SkillTitles) => (
                    <div key={section.subtitle} className="skills-content">
                        <div className="skills-grid">
                            {section.skills.map((skill) => (
                                <SkillCard
                                    key={skill.name}
                                    name={skill.name}
                                    logo={skill.logo}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                    </div>
                ))
            }
        </section>
    );
};

