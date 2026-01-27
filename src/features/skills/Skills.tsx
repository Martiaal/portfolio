import { SkillCard } from "./SkillCard.tsx";
import type { SkillsData } from "../../types/types.ts"
import skillsData from "../../datas/skills.json";
import "./Skills.css";
import {useState} from "react";

interface SkillSectionProps {
    subtitle: string;
    skills: SkillsData[];
}

export const Skills = () => {
    // On initialise avec la première catégorie du JSON
    const [activeTab, setActiveTab] = useState(skillsData[0].subtitle);

    return (
        <section id="skills" className="second-container">
            <div className="main-title" data-text={"Mes compétences"}>
                Mes compétences
            </div>

            {/* Menu de sélection des catégories */}
            <div className="skills-nav">
                {skillsData.map((section: SkillSectionProps) => (
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
            {skillsData
                .filter((section: SkillSectionProps) => section.subtitle === activeTab)
                .map((section: SkillSectionProps) => (
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

