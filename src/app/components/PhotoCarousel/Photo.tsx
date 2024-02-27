import React from "react";


export enum LabelBackground {
    GRADIENT = "gradientBackground",
    BLACK = "blackBackground",
}
interface IPhotoProps {
    labelBackground: LabelBackground;
    labelText: string;
    headerText: string;
    descriptionText: string;
    isSwiper?: boolean;
}
export const Photo = ({labelBackground, labelText, headerText, descriptionText, isSwiper}: IPhotoProps) => {
    return (
        <div className={'photoContainer'}>
            <div
                className={`photo ${!isSwiper ? `normalPhoto` : ``}`}
                style={{backgroundImage: `url(/house.jpeg)`}}
            >
                <div className='photoGradient'/>
                <div className='contentContainer' style={{textAlign: "left"}}>
                    <div className={'flex'}>
                    <div className={`labelContainer ${labelBackground}`} style={{marginBottom:"1vw"}}>
                        <h5 className={'discountText'}> {labelText} </h5>
                    </div>
                    </div>
                    <h2 className={"photoHeader"} > {headerText}</h2>
                    <p className={"photoDescription"} > {descriptionText}</p>
                </div>
            </div>
        </div>
    )
}