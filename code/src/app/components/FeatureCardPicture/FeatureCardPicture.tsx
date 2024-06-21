import React from "react";
import Image from "next/image";

interface IPhotoProps {
  src: string;
  descriptionText?: string;
  contain?: boolean;
}
export const FeatureCardPicture = ({
  src,
  descriptionText,
  contain,
}: IPhotoProps) => {
  return (
    <div
      className={"featureCardLarge"}
      style={{
        backgroundSize: `${contain ? "contain" : "cover"}`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        className={"featureCardLarge"}
        fill
        src={`/${src}`}
        objectFit={"cover"}
        alt="background"
      />
      <div className="featureCardLargeContainer">
        {descriptionText && <h6>{descriptionText}</h6>}
      </div>
    </div>
  );
};
