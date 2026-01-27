import { useState } from 'react';
import './NavBox.css';

export const NavBox = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const navItems = [
        { label: "Profil", anchor: "#about" },
        { label: "Skills", anchor: "#skills" },
        { label: "Soft Skills", anchor: "#soft-skills" },
        { label: "Projets", anchor: "#projects" },
        { label: "Expériences", anchor: "#experience" },
        { label: "BUT", anchor: "#but-skills" },
    ];

    return (
        <nav className={`nav-box ${isCollapsed ? 'collapsed' : ''}`}>
            {/* Header de la boîte : sert de poignée / toggle */}
            <div className="nav-box-header" onClick={() => setIsCollapsed(!isCollapsed)}>
                <span className="nav-box-title">NAV_SYS</span>
                <span className="nav-box-arrow">{isCollapsed ? "[+]" : "[-]"}</span>
            </div>

            <div className="nav-box-content">
                {navItems.map((item, index) => (
                    <a key={index} href={item.anchor} className="nav-box-item">
                        <span className="nav-box-dot"></span>
                        {item.label}
                    </a>
                ))}
            </div>

            <div className="nav-box-footer">
                <div className="nav-box-barcode"></div>
            </div>
        </nav>
    );
};
