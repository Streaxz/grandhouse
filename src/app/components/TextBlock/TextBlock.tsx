import '../../App.css';
import React from "react";

export interface ITextBlock {
    rectangleColor: string;
    textColor: string;
    mainText: string;
    descriptionText: string;
    paddingTop: string;

}
export const TextBlock = ({rectangleColor, textColor, mainText, descriptionText, paddingTop}: ITextBlock) => {
    return (
        <div className={"flex justify-center"} style={{paddingTop, position:"relative", width: "100%"}}>
            <div className={"mainHeader"} style={{textAlign: "left"}}>
                <div className="rectangle" style={{backgroundColor: rectangleColor}}/>
                <span style={{padding: "0", margin: "0", color: textColor, }}>
                    {mainText}
                </span>

                <p className={'mainDescription'} style={{color: textColor}}>
                    {descriptionText}
                </p>
            </div>
        </div>
    )
}