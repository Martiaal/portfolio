import { useState } from "react";
import "./ButSkills.css";
import {MainTitle} from "../../components/MainTitle.tsx";
import {TabsNav} from "../../components/TabsNav.tsx";

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
                justification: "Choix d'architecture monorepo pour allier de manière la plus simple possible web et mobile",
                project: "Eiffel Time"
            },
            {
                label: "Faire évoluer une application existante",
                justification: "Refactorisation complète du backend d'une ancienne application vers une nouvelle technologie, améliorant la maintenabilité du projet",
                project: "Eiffel Time"
            },
            {
                label: "Intégrer des solutions dans un environnement de production",
                justification: "Mise en place d'un pipeline Jenkins via github, assurant un déploiement automatique",
                project: "Pipeline Jenkins"
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
                justification: "Utilisation de méthodes python consommant une quantité négligeable de mémoire",
                project: "Qix"
            },
            {
                label: "Profiler, analyser et justifier le comportement d’un code",
                justification: "Profilage de la consommation mémoire et temporelle des différentes composantes du programme",
                project: "Qix"
            },
            {
                label: "Choisir et utiliser des bibliothèques dédiées",
                justification: "Utilisation des bibliothèques de pagination, permettant de réduire considérablement la taille des requêtes aux API",
                project: "Eiffel Time"
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
                justification: "Réunions avec l'équipe backend pour choisir la technologie la plus adaptée à notre besoin",
                project: "Eiffel Time"
            },
            {
                label: "Guider la conduite du changement informatique",
                justification: "Mise à jour des technologies utilisées en backend (de prisma/NodeJs vers Django)",
                project: "Eiffel Time"
            },
            {
                label: "Accompagner le management de projet informatique",
                justification: "Utilisation de la méthode scrum afin d'implémenter les fonctionnalités rapidement et de manière fluide",
                project: "Eiffel Time"
            }
        ]
    }
];

export const ButSkills = () => {
    const [activeTab, setActiveTab] = useState(butData[0].title);

    return (
        <section id="but-skills" className="second-container" style={{ marginTop: "100px" }}>
            <MainTitle title={"Compétences BUT"}/>

            <TabsNav
                tabs={butData.map(s => s.title)}
                activeTab={activeTab}
                onChange={setActiveTab}
            />

            <div className="but-container">
                {butData.filter(s => s.title === activeTab).map(skill => (
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
                                    <div className="subskill-project-link">
                                        SOURCE: <span className="project-name">{sub.project}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};