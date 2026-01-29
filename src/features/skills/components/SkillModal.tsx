import "./SkillModal.css";
import type {ProjectsCategories} from "../../../types/types.ts";

interface SkillModalProps {
    skillName: string;
    projects: ProjectsCategories[];
    onClose: () => void;
}

export const SkillModal = ({ skillName, onClose, projects }: SkillModalProps) => {
    const filteredProjects = projects.flatMap(cat => cat.items).filter(project =>
        project.tags.some(tag => tag.toLowerCase() === skillName.toLowerCase())
    );

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content cyberpunk-panel" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="glitch-text" data-text={`PROJETS_UTILISANT: ${skillName}`}>
                        PROJETS_UTILISANT: {skillName}
                    </h2>
                    <button className="close-btn" onClick={onClose}>[ X ]</button>
                </div>

                <div className="projects-mini-grid">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, idx) => (
                            <div key={idx} className="mini-project-card">
                                <div className="mini-img-wrapper">
                                    <img src={project.image} alt={project.name} />
                                </div>
                                <div className="mini-info">
                                    <h4>{project.name}</h4>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-data">ERREUR_SYSTEME: Aucun projet lié trouvé.</p>
                    )}
                </div>

                <div className="modal-footer-line"></div>
            </div>
        </div>
    );
};
