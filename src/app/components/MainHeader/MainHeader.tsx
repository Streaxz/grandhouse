import '../../App.css';
import React from "react";

export const MainHeader = () => {
    return (
        <div className={"flex justify-center"}>

            <div className={"mainHeader"}>
                <div className="rectangle"/>
            <span style={{padding: "0", margin: "0"}}>
                Строим дома, в которых
            </span>
                <br/>
                <span style={{whiteSpace: "nowrap", padding: "0", margin: "0"}} >
                вы будете&nbsp;
            </span>
                <span/>
                <span style={{fontWeight: "800", whiteSpace: "nowrap", padding: "0", margin: "0"}}>
                    счастливы
            </span>
                <span style={{color: "#CC00FF", fontWeight: "800",}}>
                        .
            </span>
                <p className={'mainDescription'}>
                    Вводка 300 знаков.
                    Грандхаус — строительная компания полного цикла. Мы работаем с 2015 года, у нас свои
                    профессиональные бригады, инженеры, проектировщики и дизайнеры, свой лес высочайшего качества,
                    прямые поставки каменных материалов, строжайший технадзор. 500 семей со всей России уже воплотили
                    свою мечту вместе с нами.
                </p>
            </div>
        </div>
    )
}