import './CupoGame.css'
import {Frame} from "../../components/Frame.tsx";
import {ControlItem, ControlPanel, ControlSection, KeyControl, KeyControlItem} from "../../components/ControlPanel.tsx";
import {AppButton} from "../../components/AppButton.tsx";
import {MainTitle} from "../../components/MainTitle.tsx";
import { useNavigate } from 'react-router-dom';
import {handleDownload} from "../../services/utils.ts";
import GraphView from "./GraphView.tsx";

export const CupoGame = () => {
    const navigate = useNavigate();

    const download = () => {
        handleDownload('/portfolio/games/cupo_game/cupo_adventures.zip');
    }

    return (
        <div className="project-main-container">
            <AppButton label={"BACK_HOME"} onClick={() => navigate("/")} relativePosition={true}/>
            <MainTitle title={"CUPO'S ADVENTURES"}/>

            <div className="project-main-top-content">
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

            <MainTitle title={"Apprentissage de la POO"}/>
            <GraphView
                nodes={[
                    {
                        title: 'main.py',
                        elements: ['Init Pygame', 'Game loop', 'Entrées clavier'],
                    },
                    {
                        title: 'Game',
                        elements: ['Spawn Monster', 'Changement de niveau', 'Game Over / Start', 'Update UI'],
                    },
                    {
                        title: 'Meso',
                        elements: ['Vie / Dégâts', 'Lancer Narcoberry'],
                    },
                    {
                        title: 'Narcoberry',
                        elements: ['Déplacement / Rotation', 'Dégâts Monster + Shield', 'Suppression'],
                    },
                    {
                        title: 'Monster',
                        elements: ['Attaque joueur (collision)', 'Avance vers joueur', 'Mini / Medium / Big'],
                    },
                    {
                        title: 'Berry',
                        elements: ['Récupération → +vie', 'Déclenche nouvelle vague', 'Artéfact → niveau suivant'],
                    },
                    {
                        title: 'BerryEvent',
                        elements: ['Timer', 'Drop baies (0 monstre)', 'Artéfact à la vague 4'],
                    },
                ]}
                links={[
                    { from: 'main.py',     to: 'Game',        label: 'init' },
                    { from: 'main.py',     to: 'Meso',        label: 'déplace' },
                    { from: 'Game',        to: 'Monster',     label: 'spawn' },
                    { from: 'Game',        to: 'BerryEvent',  label: 'déclenche' },
                    { from: 'Meso',        to: 'Narcoberry',  label: 'lance' },
                    { from: 'Narcoberry',  to: 'Monster',     label: 'dégâts' },
                    { from: 'Monster',     to: 'Berry',       label: 'drop à la mort' },
                    { from: 'Monster',     to: 'Game',        label: 'respawn / event' },
                    { from: 'BerryEvent',  to: 'Berry',       label: 'fait tomber' },
                    { from: 'Berry',       to: 'Meso',        label: '+vie' },
                    { from: 'Berry',       to: 'Game',        label: 'niveau / boss / fin' },
                ]}
                title={"APPRENTISSAGE DE LA POO"}
                description={"Cupo World est le premier projet où j'ai eu l'occasion d'utiliser la programmation orientée objet. Voici les différentes classes créées à l'occasion, ainsi que les liens existants entre elles."}
                height={"900px"}
            />
        </div>
    )
}