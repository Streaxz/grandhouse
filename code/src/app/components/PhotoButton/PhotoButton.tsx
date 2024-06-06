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
      <div
        className={'photoButtonContainer'}
        style={{backgroundImage: `url(${backgroundSrc})`}}
      >
          <div className='photoButtonGradient'/>
          <div className='photoButtonContent'>
              <div className={'imageContainer'}>
                  <img src={buttonSrc} style={{maxWidth: "406px", width: '60%'}} className={'buttonImage'} alt={'backgroundImage'}/>
                  <Button
                    style={{marginTop: 0, marginBottom: "12px"}}
                    onClick={() => {
                    }}
                    buttonText={buttonText}
                  />
              </div>
              <p className={"photoButtonDescription"}> {descriptionText}</p>
          </div>
      </div>
    )
}