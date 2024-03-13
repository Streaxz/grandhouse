import '../../App.css';
import React from "react";

export interface IMainHeader {
    rectangleColor: string;
}
export const MainHeader = () => {
    return (
      <div className={'textContainer'}>
          <div className="rectangle"/>
          <h1 className={'mainHeader'}>
              Строим дома, в которых
              вы будете <strong style={{position: "relative"}}>
              <svg
                style={{
                    position: "absolute",
                    zIndex: -1,
                    top: "8px",
                    left: "-10px"
                }}
                xmlns="http://www.w3.org/2000/svg" width="423" height="54" viewBox="0 0 423 54" fill="none">
                  <path d="M2 25C118.667 32.8333 310 25 422.5 25" stroke="#00A3FF" strokeWidth="50"/>
              </svg>
              счастливы</strong>
          </h1>
          <p className={'textDescription'}>
              Вводка 300 знаков.
              Грандхаус — строительная компания полного цикла. Мы работаем с 2015 года, у нас свои
              профессиональные бригады, инженеры, проектировщики и дизайнеры, свой лес высочайшего качества,
              прямые поставки каменных материалов, строжайший технадзор. 500 семей со всей России уже воплотили
              свою мечту вместе с нами.
          </p>
      </div>
    )
}