import "../../App.css";
import React from "react";

export interface IMainHeader {
  rectangleColor: string;
}
export const MainHeader = () => {
  return (
    <div className={"textContainer"}>
      <div className="rectangle" />
      <h1 className={"mainHeader"}>
        Строим дома, в которых вы будете{" "}
        <strong style={{ position: "relative" }}>
          счастливы
          <svg
            className={"vector"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 423 54"
            fill="none"
          >
            <path
              d="M2 25C118.667 32.8333 310 25 422.5 25"
              stroke="#00A3FF"
              strokeWidth="50"
            />
          </svg>
        </strong>
      </h1>
      <p className={"textDescription"}>
        Мы построили больше 500 домов, у нас только довольные заказчики и
        безупречная репутация.
      </p>
    </div>
  );
};
