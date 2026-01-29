import { useState } from "react";
import {MainTitle} from "../../components/MainTitle.tsx";
import {TabsNav} from "../../components/TabsNav.tsx";
import {SkillSection} from "./components/SkillSection.tsx";
import type {SkillTitles} from "../../types/types.ts"
import "./Skills.css";

interface SkillsProps {
    skills: SkillTitles[];
}

export const Skills = ({ skills }: SkillsProps) => {
    // On initialise avec la première catégorie du JSON
    const [activeTab, setActiveTab] = useState(skills[0].subtitle);

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
                    <SkillSection section={section}/>
                ))
            }
        </section>
    );
};

