import "../../App.css";
import React from "react";
import { LabelStandardDark } from "@/app/components/Labels/LabelStandartDark/LabelStandartDark";
import { LabelStandard } from "@/app/components/Labels/LabelStandart/LabelStandart";

export interface ITextBlock {
  rectangleColor: string;
  textColor: string;
  mainText: string;
  width?: string;
  series?: string;
}
export const ProjectHeader = ({
  rectangleColor,
  textColor,
  mainText,
  width,
  series,
}: ITextBlock) => {
  return (
    <div className={"projectMainHeader"}>
      <div className="rectangle" style={{ backgroundColor: rectangleColor }} />
      <h1
        style={{
          color: textColor,
          textAlign: "left",
          width,
          alignSelf: "baseline",
        }}
        className={"mainHeader"}
      >
        {mainText}
      </h1>
      <div className={"labelsContainer"}>
        {series && <LabelStandardDark text={series} />}
        <LabelStandard text={"Новое"} />
      </div>
    </div>
  );
};
