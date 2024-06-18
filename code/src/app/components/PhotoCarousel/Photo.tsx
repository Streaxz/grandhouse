import React from "react";
import { LabelDark } from "@/app/components/Labels/LabelDark/LabelDark";

interface IPhotoProps {
  labelText: string;
  headerText: string;
  descriptionText: string;
  isSwiper?: boolean;
}
export const Photo = ({
  headerText,
  descriptionText,
  isSwiper,
}: IPhotoProps) => {
  return (
    <div
      className={`photo ${!isSwiper ? `normalPhoto` : ``}`}
      style={{ backgroundImage: `url(/house.jpeg)` }}
    >
      <div className="photoGradient" />
      <div className="contentContainer">
        <LabelDark text={"Текст лейбла"} />
        <h3> {headerText}</h3>
        <p> {descriptionText}</p>
      </div>
    </div>
  );
};
