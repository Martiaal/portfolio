import {AboutMe} from "./components/AboutMe.tsx";
import {Skills} from "./components/Skills.tsx";
import {SoftSkills} from "./components/SoftSkills.tsx";


export const HomePage = () => {
    return (
        <>
            <AboutMe/>
            <Skills/>
            <SoftSkills/>
        </>
    )
}
