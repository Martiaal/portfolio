import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import projectsData from "../datas/projects.json";
import "./Projects.css";

export const Projects = () => {
    const [activeTab, setActiveTab] = useState(projectsData[0].category);

    return (
        <section id="projects" className="second-container" style={{ marginTop: "100px" }}>
            <div className="main-title" data-text={"Mes Projets"}>
                Mes Projets
            </div>

            <div className="skills-nav"> {/* Réutilisation de la classe des onglets Skills */}
                {projectsData.map((group) => (
                    <button
                        key={group.category}
                        className={`nav-btn ${activeTab === group.category ? "active" : ""}`}
                        onClick={() => setActiveTab(group.category)}
                    >
                        {group.category}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {projectsData
                    .find(group => group.category === activeTab)
                    ?.items.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))
                }
            </div>
        </section>
    );
};
