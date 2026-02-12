import {MainTitle} from "../../components/MainTitle.tsx";
import {AppButton} from "../../components/AppButton.tsx";
import {useNavigate} from "react-router-dom";
import {
    ColorIndicator,
    ControlItem,
    ControlPanel,
    ControlSection,
    StatusBadge
} from "../../components/ControlPanel.tsx";
import {Carousel} from "../../components/Carousel.tsx";
import {handleDownload} from "../../services/utils.ts";


export const CodexNaturalis = () => {
    const navigate = useNavigate();

    const images = [
        {
            image: "/portfolio/games/codex_naturalis/images/codex1.png",
            description: "Le joueur doit poser des cartes sur le plateau de jeu, en jonglant habilement entre récupérer des ressources et marque le plus de points possibles",
            title: "Debut Game"
        },
        {
            image: "/portfolio/games/codex_naturalis/images/codex2.png",
            description: "Le jeu possède un jeu multijoueur local. Le vainqueur est le premier joueur atteindre 21 points. Attention, les cartes objectifs permettent de marquer des points bonus, pouvant changer le cours du jeu !",
            title: "End Game"
        }
    ]

    const downloadSourceCode = () => {
        handleDownload("/portfolio/games/codex_naturalis/CodexNaturalis.zip");
    }

    return (
        <div className={"project-main-container"}>
            <MainTitle title={"CODEX NATURALIS"}/>
            <AppButton label={"BACK_HOME"} onClick={() => {navigate("/");}} relativePosition={true}/>

            <div className={"project-main-top-content"}>
                <Carousel items={images} height={"450px"}/>

                <ControlPanel title={"GAME INFOS"} footerVal={"V-1.0.1"}>

                    <ControlSection title={"RESSOURCES"}>
                        <div className="control-item">
                            <ColorIndicator colors={["#FF4136", "#00F0FF", "#F012BE", "#2ECC40"]} />
                            <span className="action-label">PRIMARY ASSETS</span>
                        </div>
                    </ControlSection>

                    <ControlSection title={"OBJECTIVES"}>
                        <div className="badge-container">
                            <StatusBadge label="RESOURCES" />
                            <StatusBadge label="LETTERS" />
                            <StatusBadge label="PATTERNS" />
                        </div>
                    </ControlSection>

                    <ControlSection title={"SCORING SYSTEM"}>
                        <ControlItem label={"DIRECT POINTS"} icon={"/portfolio/icons/score.svg"}/>
                        <div style={{marginTop: '10px'}}>
                            <ControlItem label={"COVERED CORNERS"} icon={"/portfolio/icons/corner.svg"}/>
                        </div>
                        <div style={{marginTop: '10px'}}>
                            <ControlItem label={"LETTER MULTIPLIER"} icon={"/portfolio/icons/letter.svg"}/>
                        </div>
                    </ControlSection>

                    <ControlSection title={"SOURCE CODE"}>
                        <AppButton label={"DOWNLOAD_GAME"} onClick={downloadSourceCode}/>
                    </ControlSection>

                </ControlPanel>
            </div>
        </div>
    )
}
