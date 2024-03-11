import '../../App.css';
import React from "react";

export interface ITextBlock {
    rectangleColor: string;
    textColor: string;
    mainText: string;
    descriptionText: string;

}
export const TextBlock = ({rectangleColor, textColor, mainText, descriptionText}: ITextBlock) => {
    return (
        <div className={'textContainer'}>
                <div className="rectangle" style={{backgroundColor: rectangleColor}}/>
                <h1 style={{color: textColor, textAlign: 'left', width: "70%", alignSelf: 'baseline' }} className={'mainHeader'}>
                    {mainText}
                </h1>
                <p className={'mainDescription'} style={{color: textColor, alignSelf: 'stretch'}}>
                    {descriptionText}
                </p>
        </div>
    )
}