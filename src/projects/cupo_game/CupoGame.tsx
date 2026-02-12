import './CupoGame.css'
import {Frame} from "../../components/Frame.tsx";
import {ControlItem, ControlPanel, ControlSection, KeyControl, KeyControlItem} from "../../components/ControlPanel.tsx";
import {AppButton} from "../../components/AppButton.tsx";
import {MainTitle} from "../../components/MainTitle.tsx";
import { useNavigate } from 'react-router-dom';
import {handleDownload} from "../../services/utils.ts";

export const CupoGame = () => {
    const navigate = useNavigate();

    const download = () => {
        handleDownload('/portfolio/games/cupo_game/cupo_adventures.zip');
    }

    return (
        <div className="cupo-game-container">
            <AppButton label={"BACK_HOME"} onClick={() => navigate("/")} relativePosition={true}/>
            <MainTitle title={"CUPO'S ADVENTURES"}/>

            <div className="cupo-game-content">
                <Frame
                    src={"/portfolio/games/cupo_game/index.html"}
                    title={"Les aventures de Cupo"}
                />

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

                    <ControlSection title={"COMBAT"}>
                        <KeyControlItem keyValue={"SPACE"} isWide={true} actionLabel={"FIRE"}/>
                    </ControlSection>

                    <ControlSection title={"SHORTCUTS"}>
                        <KeyControlItem keyValue={"R"} actionLabel={"INSTANT BOSS"}/>
                    </ControlSection>

                    <ControlSection title="ENGINE">
                        <ControlItem label={"PYTHON / PYGAME"} icon={"/portfolio/icons/engine.svg"}/>
                    </ControlSection>

                    <ControlSection title={"SOURCE CODE"}>
                        <AppButton label={"DOWNLOAD_GAME"}
                                   onClick={download}/>
                    </ControlSection>
                </ControlPanel>
            </div>
        </div>
    )
}