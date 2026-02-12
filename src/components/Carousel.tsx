import { useState } from 'react';
import './Carousel.css';

interface CarouselItem {
    image: string;
    description?: string;
    title?: string;
}

interface CarouselProps {
    items: CarouselItem[];
    width?: string;
    height?: string;
}

export const Carousel = ({ items, width = "800px", height = "600px" }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDescription, setShowDescription] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    if (!items || items.length === 0) return null;

    const currentItem = items[currentIndex];

    return (
        <div className="carousel-frame-container" style={{ width, height }}>
            {/* --- HEADER HUD --- */}
            <div className="carousel-header-hud">
                <div className="carousel-header-left">
                    <div className="carousel-deco-block"></div>
                    <div className="carousel-title-wrapper">
                        <span className="carousel-prefix">ID_DATA</span>
                        <h3 className="carousel-main-title">{currentItem.title || `SLOT_${currentIndex + 1}`}</h3>
                    </div>
                </div>

                <div className="carousel-header-right">
                    <button
                        className={`carousel-action-trigger ${showDescription ? 'is-active' : ''}`}
                        onClick={() => setShowDescription(!showDescription)}
                    >
                        <span className="carousel-trigger-text">
                            {showDescription ? "TERMINATE_LOG" : "ACCESS_DESCRIPTION"}
                        </span>
                    </button>
                </div>
            </div>

            {/* --- MAIN DISPLAY AREA --- */}
            <div className="carousel-display-core">
                <img
                    src={currentItem.image}
                    alt="Current stream"
                    className="carousel-main-img"
                />

                {/* DESCRIPTION OVERLAY (Avec délimitation accentuée) */}
                {showDescription && currentItem.description && (
                    <div className="carousel-desc-overlay">
                        {/* Barre de séparation visuelle haute */}
                        <div className="carousel-desc-border-top"></div>

                        <div className="carousel-desc-inner">
                            <div className="carousel-desc-header">
                                <span>SOURCE: INTERNAL_DATABASE</span>
                                <span>REF: 00-X{currentIndex}</span>
                            </div>
                            <p className="carousel-desc-content">
                                {currentItem.description}
                            </p>
                            <div className="carousel-desc-footer-pattern"></div>
                        </div>
                    </div>
                )}

                {/* NAVIGATION CONTROLS */}
                <div className="carousel-nav-layer">
                    <button className="carousel-nav-arrow prev" onClick={prevSlide}>
                        <div className="arrow-shape"></div>
                    </button>
                    <button className="carousel-nav-arrow next" onClick={nextSlide}>
                        <div className="arrow-shape"></div>
                    </button>
                </div>
            </div>

            {/* --- FOOTER & DECORATIONS --- */}
            <div className="carousel-scanline"></div>
            <div className="carousel-corner-decoration bl"></div>
            <div className="carousel-corner-decoration br"></div>

            <div className="carousel-bottom-hud">
                <div className="carousel-progress-bar">
                    <div className="carousel-progress-fill" style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}></div>
                </div>
                <div className="carousel-index-data">
                    FILE_{currentIndex + 1} // TOTAL_{items.length}
                </div>
            </div>
        </div>
    );
};