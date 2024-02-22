
export interface IShortcutItemProps {
    src: string;
    title: string;
    description: string;
    color: string;
}
export const ShortcutItem = ({src, title, description, color}:IShortcutItemProps) => {

    return (
        <div className={"shortcutItem"} style={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={src} alt={"shortcut"} style={{ height: "6vw" }} />
            </div>
            <p style={{ color, fontSize: "2vw" }}>{title}</p>
            <p style={{ color, fontSize: "1vw" }}>{description}</p>
        </div>

    )
}