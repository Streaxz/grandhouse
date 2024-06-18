import "../../App.css";
export const MagazineNavigation = () => {
  return (
    <div className={`navigationContainer navigationBorderBlue`}>
      <button className="navigationButton" style={{ position: "relative" }}>
        <span
          className={"h3Shortcut"}
          style={{ position: "relative", zIndex: 8 }}
        >
          Всё
        </span>
      </button>
      <button className="navigationButton">
        <span className={"h3Shortcut"} style={{ fontWeight: 300 }}>
          Проекты
        </span>
      </button>
      <button className="navigationButton">
        <span className={"h3Shortcut"} style={{ fontWeight: 300 }}>
          Компания
        </span>
      </button>
      <button className="navigationButton">
        <span className={"h3Shortcut"} style={{ fontWeight: 300 }}>
          Работа и отзывы
        </span>
      </button>
    </div>
  );
};
