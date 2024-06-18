import React from "react";

interface IPhotoProps {
  src: string;
  isSwiper?: boolean;
}
export const FeatureCardYouTube = ({ src }: IPhotoProps) => {
  return (
    <div
      className={"featureCardYouTube"}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="featureCardYouTubeContainer">
        <img src={"youtube.png"} style={{ width: "100%" }} alt={"youtube"} />
      </div>
    </div>
  );
};
