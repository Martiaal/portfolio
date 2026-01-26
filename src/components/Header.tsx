import {Link, useLocation} from "react-router-dom";
import './Header.css';


export const Header = () => {
    return (
        <div className={"header-container"}>
            <HeaderItem content={"À propos de moi"} link={"/"}/>
            <HeaderItem content={"Mes projets"} link={"/projects"}/>
            <HeaderItem content={"Mes compétences"} link={"/skills"}/>
        </div>
    )
}

interface HeaderItemProps {
    content: string;
    link: string;
}

const HeaderItem = ({ content, link }: HeaderItemProps) => {
    const location = useLocation();

    return (
        <Link className={`header-item ${location.pathname !== link ? "header-inactive-item" : ""}`} to={link}>
            {content}
        </Link>
    )
}
