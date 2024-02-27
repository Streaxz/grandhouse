
export interface IShortcutItemProps {
    src: string;
    title: string;
    description: string;
    color: string;
    descriptionColor: string
}
export const ShortcutItem = ({src, title, description, color, descriptionColor}:IShortcutItemProps) => {

    return (
        <div className={"shortcutItem"} style={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={src} alt={"shortcut"} className={"shortcutImage"}  />
            </div>
            <h3 style={{ color }}>{title}</h3>
            <p style={{ color: descriptionColor }}>{description}</p>
        </div>

    )
}