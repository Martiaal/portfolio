import './Header.css';


export const Header = () => {
    return (
        <div className={"header-container"}>
            <HeaderItem content={"À propos de moi"} anchor={"#about"}/>
            <HeaderItem content={"Mes projets"} anchor={"#projects"}/>
            <HeaderItem content={"Mes compétences"} anchor={"#skills"}/>
        </div>
    )
}

interface HeaderItemProps {
    content: string;
    anchor: string;
}

const HeaderItem = ({ content, anchor }: HeaderItemProps) => {
    return (
        <a href={anchor} className="header-item">
            {content}
        </a>
    )
}
