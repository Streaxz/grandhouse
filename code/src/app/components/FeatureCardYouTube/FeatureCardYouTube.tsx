import React from "react";
import Image from "next/image";

interface IPhotoProps {
  src: string;
  isSwiper?: boolean;
}
export const FeatureCardYouTube = ({ src }: IPhotoProps) => {
  return (
    <div
      className={"featureCardYouTube"}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        fill
        src={src}
        alt="youtube"
        className="borderRadius"
        objectFit={"cover"}
      />
      <div className="featureCardYouTubeContainer">
        <img src={"youtube.png"} style={{ width: "100%" }} alt={"youtube"} />
      </div>
    </div>
  );
};
