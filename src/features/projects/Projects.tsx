import { useState } from "react";
import { ProjectCard } from "./ProjectCard.tsx";
import "./Projects.css";
import type { ProjectsCategories } from "../../types/types.ts";
import {MainTitle} from "../../components/MainTitle.tsx";
import {TabsNav} from "../../components/TabsNav.tsx";

interface ProjectsProps {
    projects: ProjectsCategories[];
}

export const Projects = ({ projects }: ProjectsProps) => {
    const [activeTab, setActiveTab] = useState(projects[0].category);

    return (
        <section id="projects" className="second-container" style={{ marginTop: "100px" }}>
            <MainTitle title={"Mes Projets"}/>

            <TabsNav
                tabs={projects.map(p => p.category)}
                activeTab={activeTab}
                onChange={setActiveTab}
            />

            <div className="projects-grid">
                {projects
                    .find(group => group.category === activeTab)
                    ?.items.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))
                }
            </div>
        </section>
    );
};
