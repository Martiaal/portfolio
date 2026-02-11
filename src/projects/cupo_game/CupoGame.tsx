import './CupoGame.css'
import {Frame} from "../../components/Frame.tsx";

export const CupoGame = () => {
    return (
        <div className="cupo-game-container">
            <div className="cupo-game-header">
                <h1 className="cupo-game-title" data-text="LES AVENTURES DE CUPO">
                    LES AVENTURES DE CUPO
                    <span className="cupo-subtitle">GAME ZONE</span>
                </h1>
            </div>

            <div className="cupo-game-content">
                <Frame
                    src={"/portfolio/games/cupo_game/index.html"}
                    title={"Les aventures de Cupo"}
                />

                <div className="game-controls-panel">
                    <div className="panel-header">
                        <div className="panel-title">SYSTEM DATA</div>
                        <div className="panel-barcode"></div>
                    </div>

                    {/* Section Mouvements - Disposition Clavier */}
                    <div className="control-section">
                        <div className="section-title">MOVEMENT</div>
                        <div className="keyboard-layout">
                            <div className="key-row center">
                                <span className="key">Z</span>
                            </div>
                            <div className="key-row">
                                <span className="key">Q</span>
                                <span className="key">S</span>
                                <span className="key">D</span>
                            </div>
                        </div>
                    </div>

                    {/* Section Combat */}
                    <div className="control-section">
                        <div className="section-title">COMBAT</div>
                        <div className="control-item">
                            <span className="key wide">SPACE</span>
                            <span className="action-label">FIRE</span>
                        </div>
                    </div>

                    {/* Section Cheat/Shortcuts */}
                    <div className="control-section">
                        <div className="section-title">SHORTCUTS</div>
                        <div className="control-item">
                            <span className="key">R</span>
                            <span className="action-label">WARP TO BOSS</span>
                        </div>
                    </div>

                    {/* Section Engine */}
                    <div className="control-section">
                        <div className="section-title">ENGINE</div>
                        <div className="control-item">
                            <span className="control-icon">⚙</span>
                            <span className="engine-text">PYGAME CORE</span>
                        </div>
                    </div>

                    {/* NOUVELLE SECTION : Mission Data */}
                    <div className="control-section">
                        <div className="section-title">MISSION PROGRESS</div>
                        <div className="progress-container">
                            <div className="progress-value">84%</div>
                            <div className="progress-bar-wrapper">
                                <div className="progress-bar-fill"></div>
                            </div>
                        </div>
                    </div>

                    <div className="panel-footer">
                        <div className="footer-line"></div>
                        <div className="footer-info">
                            <span>V-2.0.0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}