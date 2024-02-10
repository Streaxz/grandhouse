import '../../App.css';
import React from "react";

export const MainHeader = () => {
    return (
        <div style={{width: "75%", color: "white", fontSize: "72px", fontWeight: "400", zIndex: 1}}>

            <span>
                Строим дома, в которых
            </span>
            <br/>
            <span style={{whiteSpace: "nowrap"}}>
                вы будете&nbsp;
            </span>
            <span/>
            <span style={{ fontWeight: "800", whiteSpace: "nowrap" }}>
                    счастливы
            </span>
            <span style={{color: "#CC00FF", fontWeight: "800",}}>
                        .
            </span>
            <p style={{width:"80%", fontSize: "24px", fontWeight: "400", paddingTop: "12px", paddingBottom: "24px"}}>
                Вводка 300 знаков.
                Грандхаус — строительная компания полного цикла. Мы работаем с 2015 года, у нас свои профессиональные бригады, инженеры, проектировщики и дизайнеры, свой лес высочайшего качества, прямые поставки каменных материалов, строжайший технадзор. 500 семей со всей России уже воплотили свою мечту вместе с нами.
            </p>
        </div>
    )
}
