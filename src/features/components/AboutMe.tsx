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
                    <img className={"home-page-picture"} src={picture} alt={"myself"}/>
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
