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
                    <div className='discount' style={{margin: "40vh 0 24px 0"}}>
                        <span style={{padding: "0 12px 0 12px"}}> Новый проект </span>
                    </div>
                    <p style={{fontSize: "48px", margin: "0"}}> Дом для всей семьи</p>
                    <p style={{fontSize: "24px", margin: "0"}}> Рассказ о нашем новом проекте</p>
                </div>
            </div>
        </div>
    )
}