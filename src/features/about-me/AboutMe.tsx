import picture from "../../assets/picture.png"
import "./AboutMe.css"


export const AboutMe = () => {
    return (
        <section id={"about"} className={"main-container"}>
            <div className={"home-page-content"}>
                <div className={"main-title"} data-text={"Martial Carceles"}>
                    Martial Carceles <span className={"subtitle"}>Développeur Full Stack</span>
                </div>
                <div className={"home-page-about-me-container"}>
                    {/* Colonne Gauche : Image + Bouton */}
                    <div className={"home-page-left-column"}>
                        <img className={"home-page-picture"} src={picture} alt={"myself"}/>

                        <a href="/docs/cv.pdf" target="_blank" rel="noreferrer" className="cyber-button">
                            <span className="cyber-button__text">Download_CV</span>
                            <span className="cyber-button__glitch"></span>
                            <span className="cyber-button__tag">R-77</span>
                        </a>
                    </div>

                    {/* Colonne Droite : Texte */}
                    <div className={"home-page-about-me-text"}>
                        Je suis Martial Carceles, un étudiant en BUT Informatique. Avec une certaine appétence pour la
                        recherche des meilleurs patterns / architectures pour les applications. Ainsi, j'ai pu développer
                        mes compétences de développeur Full-Stack au cours des trois dernières années.
                    </div>
                </div>
            </div>
        </section>
    )
}
