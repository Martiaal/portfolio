import { useState } from "react";
import "./ButSkills.css";

interface SubSkill {
    label: string;
    justification: string;
    project: string;
}

interface ButSkill {
    id: string;
    title: string;
    level: string;
    description: string;
    subSkills: SubSkill[];
}

const butData: ButSkill[] = [
    {
        id: "RT-01",
        title: "Réaliser",
        level: "Niveau 3",
        description: "Adapter des applications sur un ensemble de supports embarqués (web, mobile...)",
        subSkills: [
            {
                label: "Choisir et implémenter les architectures adaptés",
                justification: "Sélection d'une architecture Micro-frontends pour permettre un déploiement indépendant des modules.",
                project: "Neon Dashboard"
            },
            {
                label: "Faire évoluer une application existante",
                justification: "Refactorisation complète d'une API legacy vers Node.js pour améliorer la maintenabilité.",
                project: "Cyber-Shop Update"
            },
            {
                label: "Intégrer des solutions dans un environnement de production",
                justification: "Mise en place d'un pipeline CI/CD via GitHub Actions pour automatiser les déploiements.",
                project: "Cloud-Sync Engine"
            }
        ]
    },
    {
        id: "OP-02",
        title: "Optimiser",
        level: "Niveau 3",
        description: "Analyser et optimiser des applications",
        subSkills: [
            {
                label: "Anticiper les résultats de diverses métriques",
                justification: "Simulation de montée en charge (Load Testing) pour garantir la stabilité sous 10k requêtes/sec.",
                project: "Scale-Test Tool"
            },
            {
                label: "Profiler, analyser et justifier le comportement d’un code",
                justification: "Utilisation de Chrome DevTools pour identifier et corriger des fuites mémoires critiques.",
                project: "Memory-Guard"
            },
            {
                label: "Choisir et utiliser des bibliothèques dédiées",
                justification: "Implémentation de WebWorkers pour déporter les calculs lourds de l'IA hors du thread principal.",
                project: "Neural-Process"
            }
        ]
    },
    {
        id: "CL-03",
        title: "Collaborer",
        level: "Niveau 3",
        description: "Manager une équipe informatique",
        subSkills: [
            {
                label: "Organiser et partager une veille technologique",
                justification: "Mise en place d'un système de KB (Knowledge Base) partagé sur Notion pour l'équipe.",
                project: "Tech-Wiki"
            },
            {
                label: "Guider la conduite du changement informatique",
                justification: "Animation de workshops pour former les collaborateurs au passage de SVN vers Git.",
                project: "Workflow Migration"
            },
            {
                label: "Accompagner le management de projet informatique",
                justification: "Utilisation de la méthode Scrum en tant que Scrum Master pour fluidifier les sprints.",
                project: "Agile-Sync"
            }
        ]
    }
];

export const ButSkills = () => {
    const [activeTab, setActiveTab] = useState(butData[0].id);

    return (
        <section id="but-skills" className="second-container" style={{ marginTop: "100px" }}>
            <div className="main-title" data-text={"Compétences BUT"}>
                Compétences BUT
            </div>

            <div className="skills-nav">
                {butData.map((skill) => (
                    <button
                        key={skill.id}
                        className={`nav-btn ${activeTab === skill.id ? "active" : ""}`}
                        onClick={() => setActiveTab(skill.id)}
                    >
                        {skill.title}
                    </button>
                ))}
            </div>

            <div className="but-container">
                {butData.filter(s => s.id === activeTab).map(skill => (
                    <div key={skill.id} className="but-card animate-fadeIn">
                        <div className="but-card-header">
                            <div className="but-header-top">
                                <span className="but-id-badge">{skill.id}</span>
                                <span className="but-status-pulse">SYSTEM_ACTIVE</span>
                            </div>
                            <h2 className="but-main-title">{skill.title} <span className="level-tag">{skill.level}</span></h2>
                            <p className="but-main-desc">{skill.description}</p>
                        </div>

                        <div className="but-subskills-grid">
                            {skill.subSkills.map((sub, index) => (
                                <div key={index} className="subskill-module">
                                    <div className="subskill-label-container">
                                        <span className="subskill-index">0{index + 1}</span>
                                        <h4 className="subskill-label">{sub.label}</h4>
                                    </div>
                                    <div className="subskill-justification">
                                        <p>{sub.justification}</p>
                                    </div>
                                    {/*<div className="subskill-project-link">*/}
                                    {/*    SOURCE: <span className="project-name">{sub.project}</span>*/}
                                    {/*</div>*/}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};