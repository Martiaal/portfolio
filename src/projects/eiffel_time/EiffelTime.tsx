import {AppButton} from "../../components/AppButton.tsx";
import {useNavigate} from "react-router-dom";
import {MainTitle} from "../../components/MainTitle.tsx";
import {Carousel} from "../../components/Carousel.tsx";


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
            </div>
        </div>
    )
}
