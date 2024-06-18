import React from "react";

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
        backgroundImage: `url(${src})`,
        backgroundSize: `${contain ? "contain" : "cover"}`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="featureCardLargeContainer">
        {descriptionText && <h6>{descriptionText}</h6>}
      </div>
    </div>
  );
};
