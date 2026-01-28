
interface MainTitleProps {
    title: string;
    subtitle?: string;
}

export const MainTitle = ({title, subtitle}: MainTitleProps) => {
    return (
        <div className={"main-title"} data-text={title}>
            {title} <span className={"subtitle"}>{subtitle ?? ""}</span>
        </div>
    )
}
