import {useNavigate} from "react-router-dom";
import {AppButton} from "../../components/AppButton.tsx";
import {MainTitle} from "../../components/MainTitle.tsx";
import {Carousel} from "../../components/Carousel.tsx";
import {
    ControlItem,
    ControlPanel,
    ControlSection,
    RoleBadge,
    TechStack
} from "../../components/ControlPanel.tsx";


export const Algiers = () => {
    const navigate = useNavigate();

    const images = [
        {
            image: "/portfolio/games/algiers/images/algiers_discover.png",
            description: "Bienvenue sur un site portail visant à présenter les différentes facettes de la ville d'Alger.",
            title: "Découvrir Alger"
        },
        {
            image: "/portfolio/games/algiers/images/algiers_home.png",
            description: "Vous pourrez naviguer à travers différentes sections, chacune mettant en lumière un aspect unique de la ville, que ce soit son histoire riche ou sa culture rayonnante.",
            title: "Rubriques"
        },
        {
            image: "/portfolio/games/algiers/images/algiers_timeline.png",
            description: "Découvrez les évènements marquants de l'histoire d'Alger, des périodes antiques à nos jours.",
            title: "Frise Chronologique"
        },
        {
            image: "/portfolio/games/algiers/images/algiers_history.png",
            description: "Retrouvez des sections plus détaillées sur l'histoire de la ville",
            title: "Histoire"
        },
        {
            image: "/portfolio/games/algiers/images/algiers_architecture.png",
            description: "Découvrez les les différents monuments et quartiers de la ville d'Alger",
            title: "Histoire"
        },
        {
            image: "/portfolio/games/algiers/images/algiers_culture.png",
            description: "Découvrez les différentes facettes de la culture algéroise, de l'art à la musique en passant par la religion",
            title: "Histoire"
        },
        {
            image: "/portfolio/games/algiers/images/algiers_food.png",
            description: "Explication des spécialités culinaires de la ville d'Alger, ainsi que des restaurants où les déguster",
            title: "Histoire"
        },
        {
            image: "/portfolio/games/algiers/images/algiers_route.png",
            description: "Présentation de différents parcours touristiques à travers la ville d'Alger",
            title: "Histoire"
        }
    ]

    return (
        <div className={"project-main-container"}>
            <AppButton label={"BACK_HOME"} onClick={() => navigate("/")} relativePosition={true}/>
            <MainTitle title={"ALGIERS PROJECT"}/>

            <div className={"project-main-top-content"}>
                <Carousel items={images} width={"1000px"}/>

                <ControlPanel title={"PROJECT OVERVIEW"} footerVal={"V-2.1"}>

                    <ControlSection title={"MES RÔLES"}>
                        <RoleBadge role={"CHEF DE PROJET"} />
                        <div style={{marginTop: '8px'}}>
                            <RoleBadge role={"PARTIE HISTOIRE"} />
                        </div>
                        <div style={{marginTop: '8px'}}>
                            <RoleBadge role={"INTÉGRATION PHP"} />
                        </div>
                        <div style={{marginTop: '8px'}}>
                            <RoleBadge role={"MENU ADMINISTRATEUR"} />
                        </div>
                    </ControlSection>

                    <ControlSection title={"CONTENU"}>
                        <ControlItem label={"ARCHIVES HISTORIQUES"} icon={"/portfolio/icons/history.svg"}/>
                        <div style={{marginTop: '10px'}}>
                            <ControlItem label={"INFOS PRATIQUES (Hôtels, Transport, ...)"} icon={"/portfolio/icons/map.svg"}/>
                        </div>
                        <div style={{marginTop: '10px'}}>
                            <ControlItem label={"EXPLORATION CULTURELLE (Art, Musique, Religion, ...)"} icon={"/portfolio/icons/culture.svg"}/>
                        </div>
                        <div style={{marginTop: '10px'}}>
                            <ControlItem label={"RESTAURATION (restaurants, spécialités)"} icon={"/portfolio/icons/food.svg"}/>
                        </div>
                        <div style={{marginTop: '10px'}}>
                            <ControlItem label={"PANEL ADMINISTRATEUR (modifications dans la bdd)"} icon={"/portfolio/icons/database.svg"}/>
                        </div>
                    </ControlSection>

                    <ControlSection title={"TECHNOLOGIES"}>
                        <TechStack techs={["PHP", "PostgreSQL", "HTML/CSS"]} />
                    </ControlSection>

                </ControlPanel>
            </div>
        </div>
    )
}
