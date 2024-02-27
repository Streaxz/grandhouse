import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import React from "react";


export const Company = () => {
    return (
        <div className={'pageContainer'} style={{backgroundImage: "url(/backGroundForest.jpeg)"}}>
            <TextBlock
                rectangleColor={"white"}
                mainText={"Грандхауc — это люди, технологии и материалы"}
                descriptionText={"testsetstest"}
                textColor={"white"}
                paddingTop={"4vw"}
            />
        </div>
    )
}