import "./Projects.css";

interface ProjectCardProps {
    name: string;
    image: string;
    description: string;
    tags: string[];
}

export const ProjectCard = ({ name, image, description, tags }: ProjectCardProps) => {
    return (
        <div className="project-card">
            <div className="project-image-container">
                <img src={image} alt={name} className="project-image" />
                <div className="project-overlay"></div>
            </div>

            <div className="project-content">
                <div className="project-header">
                    <h3 className="project-name">{name}</h3>
                    <div className="project-tags">
                        {tags.map(tag => <span key={tag} className="project-tag">#{tag}</span>)}
                    </div>
                </div>
                <p className="project-description">{description}</p>

                {/* Décoration style code barres / ID */}
                <div className="project-footer">
                    <span className="project-id">PRJ_{name.substring(0, 3).toUpperCase()}</span>
                    <div className="project-barcode"></div>
                </div>
            </div>
        </div>
    );
};
