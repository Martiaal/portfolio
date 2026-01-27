import {AboutMe} from "./about-me/AboutMe.tsx";
import {Skills} from "./skills/Skills.tsx";
import {SoftSkills} from "./soft-skills/SoftSkills.tsx";
import {Projects} from "./projects/Projects.tsx";
import {Experience} from "./experience/Experience.tsx";
import {ButSkills} from "./but-skills/ButSkills.tsx";


export const HomePage = () => {
    return (
        <>
            <AboutMe/>
            <Skills/>
            <SoftSkills/>
            <Projects/>
            <Experience/>
            <ButSkills/>
        </>
    )
}
