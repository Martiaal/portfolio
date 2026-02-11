import {AboutMe} from "./about-me/AboutMe.tsx";
import {Skills} from "./skills/Skills.tsx";
import {SoftSkills} from "./soft-skills/SoftSkills.tsx";
import {Projects} from "./projects/Projects.tsx";
import {Experience} from "./experience/Experience.tsx";
import {ButSkills} from "./but-skills/ButSkills.tsx";
import projectsData from "../datas/projects.json";
import skillsData from "../datas/skills.json";
import expData from "../datas/experiences.json";
import softSkillsData from "../datas/softskills.json";
import type {ExpItem, ProjectsCategories, SkillTitles, SoftSkill} from "../types/types.ts";
import {NavBox} from "../components/NavBox.tsx";


export const HomePage = () => {
    const projects: ProjectsCategories[] = projectsData;
    const skills: SkillTitles[] = skillsData;
    const experiences: ExpItem[] = expData as ExpItem[];
    const softSkills: SoftSkill[] = softSkillsData as SoftSkill[];

    return (
        <>
            <NavBox/>
            <AboutMe/>
            <Skills skills={skills} projects={projects}/>
            <SoftSkills softSkills={softSkills}/>
            <Projects projects={projects}/>
            <Experience experiences={experiences}/>
            <ButSkills/>
        </>
    )
}
