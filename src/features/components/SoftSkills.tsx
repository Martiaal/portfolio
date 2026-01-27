import "./SoftSkills.css";

interface SoftSkillProps {
    label: string;
    description: string;
    code: string;
}

const softSkillsData: SoftSkillProps[] = [
    { label: "Adaptabilité", description: "Capacité à pivoter rapidement face aux changements de stack ou d'environnement.", code: "ADPT_01" },
    { label: "Esprit d'équipe", description: "Synchronisation optimale avec les membres de l'escouade via Git et communication active.", code: "TEAM_02" },
    { label: "Autonomie", description: "Résolution de problèmes complexes en isolation sans compromettre l'intégrité du projet.", code: "SELF_03" },
    { label: "Curiosité", description: "Veille constante sur les technologies émergentes et le deep-web du développement.", code: "SCAN_04" },
];

export const SoftSkills = () => {
    return (
        <section id="soft-skills" className="second-container" style={{ marginTop: "100px" }}>
            <div className="main-title" data-text={"Savoir Être"}>
                Savoir Être
            </div>

            <div className="soft-skills-container">
                {softSkillsData.map((skill) => (
                    <SoftSkillCard skill={skill}/>
                ))}
            </div>
        </section>
    );
};

interface SoftSkillCardProps {
    skill: SoftSkillProps;
}

export const SoftSkillCard = ( {skill} : SoftSkillCardProps) => {
    return (
        <div className="soft-skill-card">
            <div className="soft-skill-scanner"></div>
            <div className="soft-skill-content">
                <div className="soft-skill-header">
                    <span className="soft-skill-code">{skill.code}</span>
                    <h3 className="soft-skill-label">{skill.label}</h3>
                </div>
                <p className="soft-skill-desc">{skill.description}</p>
            </div>
            <div className="soft-skill-decoration">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
