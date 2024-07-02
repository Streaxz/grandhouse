import React from "react";
import Image from "next/image";

interface IPhotoProps {
  src: string;
  isSwiper?: boolean;
  isVideo?: boolean;
}
export const FeatureCardYouTube = ({ src, isVideo = true }: IPhotoProps) => {
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
        {isVideo && (
          <img src={"youtube.png"} style={{ width: "100%" }} alt={"youtube"} />
        )}
      </div>
    </div>
  );
};
