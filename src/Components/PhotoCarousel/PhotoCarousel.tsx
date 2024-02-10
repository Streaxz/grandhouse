import React from "react";
import {ArrowIconLeft} from "../../icons/ArrowIconLeft";
import {ArrowIconRight} from "../../icons/ArrowIconRight";
import "../../App.css";

export const PhotoCarousel = () => {
    return (
        <>
            <div style={{
                zIndex: 1,
                display: "inline-flex",
                justifyContent: "space-between",
                width: "100%",
                paddingTop: "48px"
            }}>
                <ArrowIconLeft/>
                <div
                    className='photo'
                    style={{backgroundImage: `url(${process.env.PUBLIC_URL}/house.jpeg)`}}
                >

                    <div className='photoGradient'/>
                    <div className='contentContainer'>
                        <div className='discount' style={{margin: "458px 0 24px 0"}}>
                            <span style={{padding: "0 12px 0 12px"}}> Новый проект </span>
                        </div>
                        <p style={{fontSize: "48px", margin: "0"}}> Дом для всей семьи</p>
                        <p style={{fontSize: "24px", margin: "0"}}> Рассказ о нашем новом проекте</p>
                    </div>
                </div>
                <ArrowIconRight/>

            </div>
            <div className="carouselButtons">
                <div className={"activeButton"}/>
                <div className={"carouselButton"}></div>
                <div className={"carouselButton"}></div>
            </div>
            {/*<radioButtons/>*/}
        </>
    )
}