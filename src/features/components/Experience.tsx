import "./Experience.css";

interface ExpItem {
    year: string;
    title: string; // Nom de l'école ou de l'entreprise
    subtitle: string; // Spécialité ou Poste
    type: "university" | "work";
}

const experiences: ExpItem[] = [
    { year: "2025 (3 mois)", title: "Stage chez CEICOM Solutions", subtitle: "Développeur C++", type: "work" },
    { year: "2023-2026", title: "IUT de Marne-la-Vallée", subtitle: "BUT Informatique", type: "university" },
    { year: "juin 2023", title: "Stage chez Orange", subtitle: "Développeur python", type: "work" },
];

export const Experience = () => {
    return (
        <section id="experience" className="second-container" style={{ marginTop: "100px" }}>
            <div className="main-title" data-text={"Parcours"}>
                Parcours
            </div>

            <div className="timeline-container">
                {experiences.map((exp) => (
                    <ExperienceCard exp={exp}/>
                ))}
            </div>
        </section>
    );
};

interface ExperienceCardProps {
    exp: ExpItem;
}

export const ExperienceCard = ({exp}: ExperienceCardProps) => {
    return (
        <div className={`timeline-item ${exp.type}`}>
            <div className="timeline-date">
                <span className="date-text">{exp.year}</span>
                <div className="date-dot"></div>
            </div>

            <div className="timeline-card">
                <div className="card-tag">{exp.type === "work" ? "CORP_LOG" : "EDU_LOG"}</div>
                <h3 className="card-title">{exp.title}</h3>
                <p className="card-subtitle">{exp.subtitle}</p>
                <div className="card-corner"></div>
            </div>
        </div>
    )
}
