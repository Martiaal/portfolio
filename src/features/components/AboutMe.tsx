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
                        My name is Martial Carceles, I am a Full Stack Developer with a passion for creating innovative and efficient web applications. With a strong background in both front-end and back-end development, I specialize in building seamless user experiences and robust server-side solutions. I am dedicated to continuous learning and staying updated with the latest industry trends to deliver high-quality software solutions.
                    </div>
                </div>
            </div>
        </section>
    )
}
