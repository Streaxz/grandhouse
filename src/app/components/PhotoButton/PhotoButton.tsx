import React from "react";
import {Button} from "@/app/components/Button/Button";

export interface IPhotoButton {
    backgroundSrc: string;
    buttonSrc: string;
    buttonText: string;
    descriptionText: string;
}
export const PhotoButton = ({backgroundSrc, buttonSrc, buttonText, descriptionText}: IPhotoButton) => {

    return (
        <div className={'photoButtonContainer'}>
            <div
                className='photo'
                style={{
                    backgroundImage: `url(/background.jpeg)`,
                    height: "230px",
                    borderRadius: "8vw",
                }}
            >
                <div className='photoButtonGradient'/>
                <div className='projectButtonContentContainer' style={{textAlign: "center"}}>
                    <img src={buttonSrc} className={'buttonPhoto'}/>
                    <Button
                        style={{marginTop: 0, marginBottom: "12px"}}
                        onClick={() => {}}
                        buttonText={buttonText}
                    />
                    <p className={"photoDescription"} > {descriptionText}</p>
                </div>
            </div>
        </div>
    )
}