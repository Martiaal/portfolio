import picture from "../../assets/picture.png"
import "./AboutMe.css"
import {MainTitle} from "../../components/MainTitle.tsx";
import {AppButton} from "../../components/AppButton.tsx";


export const AboutMe = () => {
    const OpenCV = () => {
        window.open("/portfolio/docs/cv.pdf", "_blank", "noreferrer");
    }

    return (
        <section id={"about"} className={"main-container"}>
            <div className={"home-page-content"}>
                <MainTitle title={"Martial Carceles"} subtitle={"Développeur full-stack"}/>
                <div className={"home-page-about-me-container"}>
                    {/* Left column : image and picture */}
                    <div className={"home-page-left-column"}>
                        <img className={"home-page-picture"} src={picture} alt={"myself"}/>

                        <AppButton label={"DOWNLOAD_CV"} onClick={OpenCV}/>
                    </div>

                    {/* Right column : description */}
                    <div className={"home-page-about-me-text"}>
                        Je suis Martial Carceles, étudiant en BUT Informatique. Mon appétence pour le développement
                        d'applications me pousse à rechercher une alternance pour mes trois prochaines années, que je
                        compte réaliser au sein d'une école d'ingénieur.
                    </div>
                </div>
            </div>
        </section>
    )
}
