import React from "react";
import { Button } from "@/app/components/Button/Button";
import { useModalFunctions } from "@/app/components/Modal/ModalContainer";
import Image from "next/image";

export interface IPhotoButton {
  backgroundSrc: string;
  buttonSrc: string;
  buttonText: string;
  descriptionText: string;
}
export const PhotoButton = ({
  backgroundSrc,
  buttonSrc,
  buttonText,
  descriptionText,
}: IPhotoButton) => {
  const { openModal } = useModalFunctions();
  return (
    <div
      onClick={openModal}
      className={"photoButtonContainer"}
      style={{ backgroundImage: `url(${backgroundSrc})` }}
    >
      <Image
        fill
        objectFit="cover"
        src={backgroundSrc}
        className={"photoButtonContainer"}
        alt={"backgroundImage"}
      />
      <div className="photoButtonGradient" />
      <div className="photoButtonContent">
        <div className={"imageContainer"}>
          <img
            src={buttonSrc}
            style={{ maxWidth: "406px", width: "60%" }}
            className={"buttonImage"}
            alt={"backgroundImage"}
          />
          <Button
            style={{ marginTop: 0, marginBottom: "12px" }}
            onClick={() => {}}
            buttonText={buttonText}
          />
        </div>
        <p className={"photoButtonDescription"}> {descriptionText}</p>
      </div>
    </div>
  );
};
