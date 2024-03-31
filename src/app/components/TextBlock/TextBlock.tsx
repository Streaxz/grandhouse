import '../../App.css';
import React from "react";

export interface ITextBlock {
    rectangleColor: string;
    textColor: string;
    mainText: string;
    descriptionText?: string;
    width?: string

}
export const TextBlock = ({rectangleColor, textColor, mainText, descriptionText, width}: ITextBlock) => {
    return (
        <div className={'textContainer'}>
                <div className="rectangle" style={{backgroundColor: rectangleColor}}/>
                <h1 style={{color: textColor, textAlign: 'left', width, alignSelf: 'baseline' }} className={'mainHeader'}>
                    {mainText}
                </h1>
            {descriptionText &&
                <p className={'textDescription'} style={{color: textColor}}>
                    {descriptionText}
                </p>
            }
        </div>
    )
}