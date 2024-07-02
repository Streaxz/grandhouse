import React from "react";
import Image from "next/image";

interface IPhotoProps {
  src: string;
  descriptionText?: string;
  contain?: boolean;
  isLightBox?: boolean;
  openLightboxOnSlide?: (number: number) => void;
  index?: number;
}
export const FeatureCardPicture = ({
  src,
  descriptionText,
  contain,
  openLightboxOnSlide,
  index,
}: IPhotoProps) => {
  console.log(index && index + 1);
  return (
    <div
      className={"featureCardLarge"}
      style={{
        backgroundSize: `${contain ? "contain" : "cover"}`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onClick={() =>
        openLightboxOnSlide && openLightboxOnSlide(index ? index + 1 : 1)
      }
    >
      <Image
        className={"featureCardLarge"}
        fill
        src={`${src}`}
        objectFit={"cover"}
        alt="background"
      />
      <div className="featureCardLargeContainer">
        {descriptionText && <h6>{descriptionText}</h6>}
      </div>
    </div>
  );
};
