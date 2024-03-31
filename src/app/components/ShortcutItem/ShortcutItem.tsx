
export interface IShortcutItemProps {
    emoji: string;
    title: string;
    description: string;
    color: string;
    descriptionColor: string
}
export const ShortcutItem = ({emoji, title, description, color, descriptionColor}:IShortcutItemProps) => {

    return (
        <div className={"shortcutItem"} style={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center",  }}>
                    <p className={'shortcutImage'}>{emoji}</p>

            </div>
            <h3 style={{ color }}>{title}</h3>
            <h5 style={{ color: descriptionColor }}>{description}</h5>
        </div>

    )
}