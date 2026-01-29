import "./Experience.css";
import { MainTitle } from "../../components/MainTitle.tsx";
import { ExperienceCard } from "./components/ExperienceCard.tsx";
import type { ExpItem } from "../../types/types.ts";

interface ExperienceProps {
    experiences: ExpItem[];
}

export const Experience = ({ experiences }: ExperienceProps) => {
    return (
        <section id="experience" className="second-container" style={{ marginTop: "100px" }}>
            <MainTitle title={"Mon Parcours"}/>

            <div className="timeline-container">
                {experiences.map((exp) => (
                    <ExperienceCard exp={exp}/>
                ))}
            </div>
        </section>
    );
};
