import {AppButton} from "../../components/AppButton.tsx";
import {useNavigate} from "react-router-dom";
import {MainTitle} from "../../components/MainTitle.tsx";
import {Carousel} from "../../components/Carousel.tsx";
import {
    ControlItem,
    ControlPanel,
    ControlSection,
    RoleBadge,
    TechStack
} from "../../components/ControlPanel.tsx";


export const EiffelTime = () => {
    const navigate = useNavigate();

    const images = [
        {
            image: "/portfolio/games/eiffel/images/eiffel_dashboard.png",
            description: "Bienvenue sur le dashboard de l'application du portail universitaire : Eiffel Time. Les élèves, les professeurs et les secrétaires possèderont chacun un dashboard différent.",
            title: "DASHBOARD"
        },
        {
            image: "/portfolio/games/eiffel/images/eiffel_planning.png",
            description: "Cette interface permet d'afficher le planning de l'utilisateur concerné, qu'il soit étudiant, professeur ou secrétaire. Les cours passés et futurs sont affichés.",
            title: "PLANNING"
        },
        {
            image: "/portfolio/games/eiffel/images/eiffel_absences.png",
            description: "Les étudiants peuvent consulter leurs absences ainsi qu'ajouter des justificatifs. Les secrétaires peuvent ensuite valider ou refuser ces justificatifs. Les professeurs peuvent quant à eux seulement consulter les absences.",
            title: "ABSENCES"
        },
        {
            image: "/portfolio/games/eiffel/images/eiffel_qr.png",
            description: "Les professeurs peuvent effectuer l'appel de manière manuelle. Mais ils peuvent également générer un QR code lié au cours. Les étudiants doivent ensuite le scanner pour être inscrit comme présent. Le QR code est tournant.",
            title: "QR_CODE"
        },
        {
            image: "/portfolio/games/eiffel/images/eiffel_new_year.png",
            description: "Le gestionnaire d'une promotion peut activer activer le changement d'année. Ainsi, les étudiants / groupes / modules de l'année précédente sont recréés pour la nouvelle promo, sans que le gestionnaire ait à tout refaire manuellement.",
            title: "NEW_YEAR"
        },
    ]

    return (
        <div className={"project-main-container"}>
            <AppButton label={"BACK_HOME"} onClick={() => navigate('/')} relativePosition={true}/>
            <MainTitle title={"EIFFEL TIME"}/>

            <div className={"project-main-top-content"}>
                <Carousel items={images} width={"1000px"} height={"500px"}/>

                <ControlPanel title={"UNIVERSITY TERMINAL"} footerVal={"V 0.8"}>

                    <ControlSection title={"CONTRIBUTIONS"}>
                        <RoleBadge role={"DEVELOPPEUR FULLSTACK"} />
                        <div style={{marginTop: '8px'}}>
                            <RoleBadge role={"UI / UX DESIGNER"} />
                        </div>
                    </ControlSection>

                    <ControlSection title={"CORE FEATURES"}>
                        <ControlItem label={"GESTION DES ABSENCES"} icon={"/portfolio/icons/absence.svg"}/>
                        <div style={{marginTop: '10px'}}>
                            <ControlItem label={"QR CODE DYNAMIQUE"} icon={"/portfolio/icons/qr-code.svg"}/>
                        </div>
                        <div style={{marginTop: '10px'}}>
                            <ControlItem label={"SYSTÈME DE PLANNING"} icon={"/portfolio/icons/planning.svg"}/>
                        </div>
                        <div style={{marginTop: '10px'}}>
                            <ControlItem label={"MIGRATION ANNUELLE"} icon={"/portfolio/icons/cycle.svg"}/>
                        </div>
                    </ControlSection>

                    <ControlSection title={"TECHNOLOGIES"}>
                        <TechStack techs={["REACT", "DJANGO", "TYPESCRIPT", "POSTGRESQL"]} />
                    </ControlSection>

                </ControlPanel>
            </div>
        </div>
    )
}
