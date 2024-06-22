import React from "react";
import Image from "next/image";

interface IPhotoProps {
  src: string;
  descriptionText?: string;
}
export const FeatureCardPictureAnimated = ({
  src,
  descriptionText,
}: IPhotoProps) => {
  return (
    <div
      className={"featureCardPicture"}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image src={src} alt={"photo"} fill className={"borderRadius"} />
      <div className="featureCardLargeContainer">
        {descriptionText && <h6>{descriptionText}</h6>}
      </div>
    </div>
  );
};
