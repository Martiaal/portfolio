import picture from "../../assets/picture.png"
import "./AboutMe.css"
import {MainTitle} from "../../components/MainTitle.tsx";
import {AppButton} from "../../components/AppButton.tsx";


export const AboutMe = () => {
    const OpenCV = () => {
        window.open("/docs/cv.pdf", "_blank", "noreferrer");
    }

    return (
        <section id={"about"} className={"main-container"}>
            <div className={"home-page-content"}>
                <MainTitle title={"Martial Carceles"} subtitle={"Développeur full-stack"}/>
                <div className={"home-page-about-me-container"}>
                    {/* Left column : image and picture */}
                    <div className={"home-page-left-column"}>
                        <img className={"home-page-picture"} src={picture} alt={"myself"}/>

                        <AppButton label={"DOWNLOAD_CV"} onClick={OpenCV} tag={"R-77"}/>
                    </div>

                    {/* Right column : description */}
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
