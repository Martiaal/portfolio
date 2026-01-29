import "./TabsNav.css";

interface TabsNavProps<T extends string> {
    tabs: T[];
    activeTab: T;
    onChange: (tab: T) => void;
    className?: string;
}

export const TabsNav = <T extends string>(
    { tabs, activeTab, onChange, className = "tabs-nav" }: TabsNavProps<T>) => {
    return (
        <div className={className}>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`nav-btn ${activeTab === tab ? "active" : ""}`}
                    onClick={() => onChange(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};
