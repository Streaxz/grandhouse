import "../../App.css";
import { useRouter } from "next/navigation";
export const Navigation = () => {
  const router = useRouter();
  return (
    <div className="navigationContainer navigationBorderWhite">
      <button
        onClick={() => {
          router.push("/philosophy");
        }}
        className="navigationButton"
        style={{ position: "relative" }}
      >
        <img
          src={`/PhilosophyHead.png`}
          className={"philosophyPhoto"}
          alt={"philosophyPhoto"}
        />
        <span
          className={"h3Shortcut"}
          style={{ position: "relative", zIndex: 8 }}
        >
          Философия
        </span>
      </button>
      <button
        onClick={() => {
          router.push("/catalog");
        }}
        className="navigationButton"
      >
        <span className={"h3Shortcut"} style={{ fontWeight: 300 }}>
          Проекты
        </span>
      </button>
      <button
        onClick={() => {
          router.push("/company");
        }}
        className="navigationButton"
      >
        <span className={"h3Shortcut"} style={{ fontWeight: 300 }}>
          Компания
        </span>
      </button>
      <button
        onClick={() => {
          router.push("/reviews");
        }}
        className="navigationButton"
      >
        <span className={"h3Shortcut"} style={{ fontWeight: 300 }}>
          Работа и отзывы
        </span>
      </button>
    </div>
  );
};
