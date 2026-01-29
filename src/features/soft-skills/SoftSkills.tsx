import "./SoftSkills.css";
import {MainTitle} from "../../components/MainTitle.tsx";
import type {SoftSkill} from "../../types/types.ts";
import {SoftSkillCard} from "./components/SoftSkillCard.tsx";

interface SoftSkillsProps {
    softSkills: SoftSkill[];
}

export const SoftSkills = ({softSkills}: SoftSkillsProps) => {
    return (
        <section id="soft-skills" className="second-container" style={{ marginTop: "100px" }}>
            <MainTitle title={"Savoir être"}/>

            <div className="soft-skills-container">
                {softSkills.map((skill) => (
                    <SoftSkillCard skill={skill}/>
                ))}
            </div>
        </section>
    );
};
