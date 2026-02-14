import {AppButton} from "../../components/AppButton.tsx";
import {useNavigate} from "react-router-dom";
import {MainTitle} from "../../components/MainTitle.tsx";
import {Carousel} from "../../components/Carousel.tsx";
import {
    ControlItem,
    ControlPanel,
    ControlSection,
    DataCounter,
    RoleBadge,
    TechStack
} from "../../components/ControlPanel.tsx";


export const Travia = () => {
    const navigate = useNavigate();
    const images = [
        {
            image: "/portfolio/games/travia/images/travia_home.png",
            description: "Bienvenu sur Travia, un site de voyage intergalactique sur le thème de Star Wars. Vous pouvez choisir la planète de départ et d'arrivée, en entrant son nom ou en passant par la carte.",
            title: "HOME_PAGE"
        },
        {
            image: "/portfolio/games/travia/images/travia_travel_options.png",
            description: "Vous pourrez configurer les options liés au voyage, comme la date (calendrier personnalisé), le nombre de passagers, et les vaisseaux à éviter (Empire, Rebelles, etc...)",
            title: "TRAVEL_OPTIONS"
        },
        {
            image: "/portfolio/games/travia/images/travia_result.png",
            description: "Affichage de la distance entre les deux planètes avec un affichage de la carte galactique. On peut également voir la liste de nos vaisseaux, en précisant lequel sera la plus rapide",
            title: "TRAVEL_RESULT"
        },
        {
            image: "/portfolio/games/travia/images/travia_itinerary.png",
            description: "L'utilisateur peut choisir les transports en commun. Dans ce cas, on affiche la liste des trajets à effectuer, avec les temps d'arrêt",
            title: "TRAVEL_ITINERARY"
        }
    ]
    return (
        <div className={"project-main-container"}>
            <AppButton label={"BACK_HOME"} onClick={() => navigate("/")} relativePosition={true}/>
            <MainTitle title={"TRAVIA"}/>

            <div className={"project-main-top-content"}>
                <Carousel items={images} width={"1000px"}/>
                <ControlPanel title={"NAV-COMPUTER OVERRIDE"} footerVal={"V 1.1"}>

                    <ControlSection title={"MISSIONS"}>
                        <RoleBadge role={"CHEF DE PROJET"} />
                        <div style={{marginTop: '8px'}}>
                            <RoleBadge role={"DEVELOPPEUR FULLSTACK"} />
                        </div>
                    </ControlSection>

                    <ControlSection title={"SYSTEM CAPABILITIES"}>
                        <ControlItem label={"CALCUL DE DISTANCES STELLAIRES"} icon={"/portfolio/icons/map.svg"}/>
                        <div style={{marginTop: '10px'}}>
                            <ControlItem label={"BASE DE DONNÉES MySQL"} icon={"/portfolio/icons/database.svg"}/>
                        </div>
                        <div style={{marginTop: '10px'}}>
                            <ControlItem label={"TRAJETS PERSONNALISÉS"} icon={"/portfolio/icons/route.svg"}/>
                        </div>
                        <div style={{marginTop: '10px'}}>
                            <ControlItem label={"FILTRES D'AFFILIATION (Empire / Rebelles)"} icon={"/portfolio/icons/target.svg"}/>
                        </div>
                    </ControlSection>

                    {/* Nouveau composant : Analyse de données */}
                    <ControlSection title={"GALACTIC NETWORK STATUS"}>
                        <div className="data-grid">
                            <DataCounter label="PLANETS" value="5444" />
                            <DataCounter label="STARSHIPS" value="10" />
                        </div>
                    </ControlSection>

                    <ControlSection title={"HYPERDRIVE TECH"}>
                        <TechStack techs={["HTML", "CSS", "PHP", "MySQL"]} />
                    </ControlSection>

                </ControlPanel>
            </div>
        </div>
    )
}
