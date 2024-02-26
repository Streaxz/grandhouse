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
                    <div className={'flex'}>
                    <div className='discount' style={{marginBottom:"1vw"}}>
                        <h5 className={'discountText'}> Новый проект </h5>
                    </div>
                    </div>
                    <h2 className={"photoHeader"} > Дом для всей семьи</h2>
                    <p className={"photoDescription"}> Рассказ о нашем новом проекте</p>
                </div>
            </div>
        </div>
    )
}