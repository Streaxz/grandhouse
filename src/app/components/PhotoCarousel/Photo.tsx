import React from "react";

export const Photo = () => {
    return (
        <div style={{width: "100%"}}>
            <div
                className='photo'
                style={{backgroundImage: `url(/house.jpeg)`}}
            >
                <div className='photoGradient'/>
                <div className='contentContainer'>
                    <div className='discount' style={{margin: "70% 0 0 0"}}>
                        <span className={'discountText'}> Новый проект </span>
                    </div>
                    <p className={"photoHeader"}> Дом для всей семьи</p>
                    <p className={"photoDescription"}> Рассказ о нашем новом проекте</p>
                </div>
            </div>
        </div>
    )
}