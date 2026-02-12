import {Carousel} from "../../components/Carousel.tsx";
import "./QixGame.css";
import {AppButton} from "../../components/AppButton.tsx";
import {MainTitle} from "../../components/MainTitle.tsx";
import {useNavigate} from "react-router-dom";
import {ControlItem, ControlPanel, ControlSection, KeyControl, KeyControlItem} from "../../components/ControlPanel.tsx";
import {handleDownload} from "../../services/utils.ts";


export const QixGame = () => {
    const navigate = useNavigate();

    const downloadSourceCode = () => {
        handleDownload("/portfolio/games/qix/qix.zip");
    }

    const images = [
        {
            image: "/portfolio/games/qix/images/qix_debut_game.png",
            description: "The player has to move around the board and create closed shapes to capture territory while avoiding the Qix and Sparx.",
            title: "Debut Game"
        },
        {
            image: "/portfolio/games/qix/images/qix_end_game.png",
            description: "More enemies appears as the player advance through levels, making it increasingly difficult to survive.",
            title: "End Game"
        },
        {
            image: "/portfolio/games/qix/images/qix_two_players.png",
            description: "Possibility to have two players playing simultaneously, competing for territory and trying to outscore each other.",
            title: "Two Players"
        }
    ]

    return (
        <div className={"qix-game-container"}>
            <AppButton label={"BACK_HOME"} onClick={() => navigate("/")} relativePosition={true}/>
            <MainTitle title={"QIX"}/>

            <div className={"qix-game-top-container"}>
                <Carousel items={images}/>

                <ControlPanel title={"SYSTEM DATA"} footerVal={"V-2.0.0"}>

                    <ControlSection title={"MOVEMENT"}>
                        <div className="keyboard-layout">
                            <div className="key-row center">
                                <KeyControl keyValue={"Z"}/>
                            </div>
                            <div className="key-row">
                                <KeyControl keyValue={"Q"}/>
                                <KeyControl keyValue={"S"}/>
                                <KeyControl keyValue={"D"}/>
                            </div>
                        </div>
                    </ControlSection>

                    <ControlSection title={"CREATION MODE"}>
                        <KeyControlItem keyValue={"SPACE"} isWide={true} actionLabel={"ENABLE"}/>
                    </ControlSection>

                    <ControlSection title={"FAST MODE"}>
                        <KeyControlItem keyValue={"SHIFT"} isWide={true} actionLabel={"ENABLE"}/>
                    </ControlSection>

                    <ControlSection title="ENGINE">
                        <ControlItem label={"PYTHON / FLTK"} icon={"/portfolio/icons/engine.svg"}/>
                    </ControlSection>

                    <ControlSection title={"SOURCE CODE"}>
                        <AppButton label={"DOWNLOAD_GAME"}
                                   onClick={downloadSourceCode}/>
                    </ControlSection>
                </ControlPanel>
            </div>
        </div>
    )
}
