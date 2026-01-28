import {AboutMe} from "./about-me/AboutMe.tsx";
import {Skills} from "./skills/Skills.tsx";
import {SoftSkills} from "./soft-skills/SoftSkills.tsx";
import {Projects} from "./projects/Projects.tsx";
import {Experience} from "./experience/Experience.tsx";
import {ButSkills} from "./but-skills/ButSkills.tsx";
import projectsData from "../datas/projects.json";
import skillsData from "../datas/skills.json";
import type { ProjectsCategories } from "../types/types.ts";
import type { SkillTitles } from "../types/types.ts"


export const HomePage = () => {
    const projects: ProjectsCategories[] = projectsData;
    const skills: SkillTitles[] = skillsData;

    return (
        <>
            <AboutMe/>
            <Skills skills={skills}/>
            <SoftSkills/>
            <Projects projects={projects}/>
            <Experience/>
            <ButSkills/>
        </>
    )
}
