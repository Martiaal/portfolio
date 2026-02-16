import {AppButton} from "../../components/AppButton.tsx";
import {useNavigate} from "react-router-dom";
import {MainTitle} from "../../components/MainTitle.tsx";
import {Carousel} from "../../components/Carousel.tsx";
import {
    ControlItem,
    ControlPanel,
    ControlSection, RoleBadge,
    TechStack
} from "../../components/ControlPanel.tsx";


export const Harmoneyca = () => {
    const navigate = useNavigate();

    const images = [
        {
            image: "/portfolio/games/harmoneyca/images/harmoneyca_home.png",
            description: "Bienvenue sur la page d'accueil de Harmoneyca. Vous pouvez ici voir vos trois dernières transactions, remises et impayés.",
            title: "HOME"
        },
        {
            image: "/portfolio/games/harmoneyca/images/harmoneyca_history.png",
            description: "Dans la section historique, vous pourrez consulter votre solde actuel et les dernières entrées et sorties d'argent. Vous pourrez également lister toutes vos transactions, sur une période donnée ou personnalisée.",
            title: "HISTORY"
        },
        {
            image: "/portfolio/games/harmoneyca/images/harmoneyca_admin_add.png",
            description: "L'administrateur a le pouvoir de créer de nouveaux comptes, de les consulter ou encore de les supprimer.",
            title: "ADMIN"
        },
    ]
    return (
        <div className={"project-main-container"}>
            <AppButton label={"BACK_HOME"} onClick={() => navigate("/")} relativePosition={true}/>
            <MainTitle title={"HARMONEYCA"}/>

            <div className={"project-main-top-content"}>
                <Carousel items={images} width={"1000px"} height={"500px"}/>

                <ControlPanel title={"SYSTEM MONITORING"} footerVal={"V 1.2"}>

                    <ControlSection title={"MY ROLE"}>
                        <RoleBadge role={"CHEF DE PROJET"} />
                        <div style={{marginTop: '10px'}}>
                            <RoleBadge role={"DEVELOPPEUR BACKEND"} />
                        </div>
                        <div style={{marginTop: '10px'}}>
                            <RoleBadge role={"CRÉATION DE LA BDD"} />
                        </div>
                    </ControlSection>

                    <ControlSection title={"FONCTIONS CLÉS"}>
                        <ControlItem label={"HISTORIQUE DYNAMIQUE"} icon={"/portfolio/icons/history.svg"}/>
                        <div style={{marginTop: '10px'}}>
                            <ControlItem label={"GESTION DES IMPAYÉS"} icon={"/portfolio/icons/warning.svg"}/>
                        </div>
                        <div style={{marginTop: '10px'}}>
                            <ControlItem label={"CONTRÔLE ADMINISTRATEUR"} icon={"/portfolio/icons/database.svg"}/>
                        </div>
                    </ControlSection>

                    <ControlSection title={"TECHNOLOGIES"} >
                        <TechStack techs={["HTML", "CSS", "JAVASCRIPT", "PHP"]} />
                    </ControlSection>
                </ControlPanel>
            </div>
        </div>
    )
}
