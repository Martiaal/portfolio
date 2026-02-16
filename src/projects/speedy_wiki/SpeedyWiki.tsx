import {useNavigate} from "react-router-dom";
import {AppButton} from "../../components/AppButton.tsx";
import {MainTitle} from "../../components/MainTitle.tsx";
import {Carousel} from "../../components/Carousel.tsx";
import {
    ControlPanel,
    ControlSection,
    DataCounter,
    FeatureItem,
    StatusBadge,
    TechStack
} from "../../components/ControlPanel.tsx";


export const SpeedyWiki = () => {
    const navigate = useNavigate();

    const images = [
        {
            image: "/portfolio/games/speedy_wiki/images/speedy_wiki_home.png",
            description: "Bienvenue sur la page d'accueil de Speedy Wiki. Vous pourrez ici créer un nouveau lobby ou en rejoindre un existant.",
            title: "HOME"
        },
        {
            image: "/portfolio/games/speedy_wiki/images/speedy_wiki_selection.png",
            description: "Choisissez un pseudo et un avatar pour vous différencier des autres joueurs pendant la partie.",
            title: "PERSONNALISATION"
        },
        {
            image: "/portfolio/games/speedy_wiki/images/speedy_wiki_lobby.png",
            description: "Vous pourrez ici voir la liste des autres joueurs. Vous pourrez également quitter le lobby et inviter d'autres joueurs. Enfin, vous pourrez communiquer avec les autres joueurs à l'aide d'un chat intégré à l'application.",
            title: "LOBBY"
        },
        {
            image: "/portfolio/games/speedy_wiki/images/speedy_wiki_game.png",
            description: "Une fois la partie lancée, vous pourrez jouer au jeu. L'objectif est de trouver 6 pages wikipedia, le plus rapidement possibles en évitant des malus (téléportation aléatoire, ralentisseur, etc...)",
            title: "GAME"
        },
    ]

    return (
        <div className={"project-main-container"}>
            <AppButton label={"BACK_HOME"} onClick={() => navigate("/")} relativePosition={true}/>
            <MainTitle title={"SPEEDY WIKI"}/>

            <div className={"project-main-top-content"}>
                <Carousel items={images} width={"1000px"} height={"500px"}/>
                <ControlPanel title={"MISSION BRIEF"} footerVal={"V 1.0"}>
                    <ControlSection title={"OBJECTIF"}>
                        <FeatureItem
                            label={"SPEED RUN"}
                            description={"Trouver 6 pages Wikipedia le plus rapidement possible."}
                        />
                        <div style={{marginTop: '10px'}}>
                            <FeatureItem
                                label={"SURVIE"}
                                description={"Éviter les malus : téléportations, ralentisseurs et pièges."}
                            />
                        </div>
                    </ControlSection>

                    <ControlSection title={"STATUT SYSTÈME"}>
                        <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                            <StatusBadge label={"MULTIJOUEUR"} type="success" />
                            <StatusBadge label={"TEMPS RÉEL"} type="default" />
                        </div>
                        <div className="data-grid">
                            <DataCounter label="OBJECTIFS" value="06" />
                            <DataCounter label="JOUEURS MAX" value="08" />
                        </div>
                    </ControlSection>

                    <ControlSection title={"STACK TECHNIQUE"}>
                        <TechStack techs={["REACT", "WEBSCOKET", "NODE.JS", "PYTHON"]} />
                    </ControlSection>
                </ControlPanel>
            </div>
        </div>
    )
}
