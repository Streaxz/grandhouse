import React from "react";

export const DifferentPhoto = () => {
    return (
        <div style={{width: "100%"}}>
            <div
                className='photo'
                style={{backgroundImage: `url(/autumn.png)`}}
            >
                <div className='photoGradient'/>
                <div className='contentContainer'>
                    <div style={{display:'flex'}} >
                        <div className='discount' >
                            <span className={'discountText'}> Новый проект </span>
                        </div>
                    </div>
                    <p className={"photoHeader"}> Дом для всей семьи</p>
                    <p className={"photoDescription"}> Рассказ о нашем новом проекте</p>
                </div>
            </div>
        </div>
    )
}