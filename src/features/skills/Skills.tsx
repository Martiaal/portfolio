import { useState } from "react";
import {MainTitle} from "../../components/MainTitle.tsx";
import {TabsNav} from "../../components/TabsNav.tsx";
import {SkillSection} from "./components/SkillSection.tsx";
import type {ProjectsCategories, SkillTitles} from "../../types/types.ts"
import "./Skills.css";
import {SkillModal} from "./components/SkillModal.tsx";

interface SkillsProps {
    skills: SkillTitles[];
    projects: ProjectsCategories[];
}

export const Skills = ({ skills, projects }: SkillsProps) => {
    const [activeTab, setActiveTab] = useState(skills[0].subtitle);
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

    return (
        <section id="skills" className="second-container">
            <MainTitle title={"Mes compétences"}/>

            <TabsNav
                tabs={skills.map(s => s.subtitle)}
                activeTab={activeTab}
                onChange={setActiveTab}
            />

            {/* Affichage de la section active uniquement */}
            {skills
                .filter((section: SkillTitles) => section.subtitle === activeTab)
                .map((section: SkillTitles) => (
                    <SkillSection section={section} onSkillClick={setSelectedSkill}/>
                ))
            }

            {selectedSkill && (
                <SkillModal
                    skillName={selectedSkill}
                    onClose={() => setSelectedSkill(null)}
                    projects={projects}
                />
            )}
        </section>
    );
};

