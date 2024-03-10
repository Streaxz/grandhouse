import '../../App.css';
import React from "react";

export interface IMainHeader {
    rectangleColor: string;
}
export const MainHeader = () => {
    return (
        <div className={'textContainer'} >
                <div className="rectangle"/>
                <h1 className={'mainHeader'}>
                    Строим дома, в которых
                    вы будете <strong>счастливы</strong><span style={{color: "var(--color-purple)"}}>.</span>
                </h1>
                <p className={'mainDescription'} style={{alignSelf: 'stretch'}}>
                    Вводка 300 знаков.
                    Грандхаус — строительная компания полного цикла. Мы работаем с 2015 года, у нас свои
                    профессиональные бригады, инженеры, проектировщики и дизайнеры, свой лес высочайшего качества,
                    прямые поставки каменных материалов, строжайший технадзор. 500 семей со всей России уже воплотили
                    свою мечту вместе с нами.
                </p>
        </div>
    )
}