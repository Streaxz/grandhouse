import { LabelDark } from "@/app/components/Labels/LabelDark/LabelDark";
import React from "react";
import { useRouter } from "next/navigation";
import { IProject } from "@/app/types/IProject";
import { PHOTO_TYPE } from "@/app/types/IPhoto";
import Image from "next/image";

export interface ICardProps {
  descriptionText: string;
  isSwiper?: boolean;
  project: IProject;
}
export const FeatureCardSmallDarkLabel = ({
  descriptionText,
  project,
}: ICardProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/project/${project.id}`);
      }}
      className={`featureCardSmallDarkLabel clickable`}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        fill
        src={`/${
          project?.photos?.filter(
            (photo) => photo.type === PHOTO_TYPE.GENERAL,
          )[0].imageUrl || ""
        }`}
        className={"borderRadius"}
        objectFit={"cover"}
        alt="background"
      />
      <div className="featureCardSmallDarkLabelGradient" />
      <div className="featureCardSmallDarkLabelContent">
        <LabelDark text={project.series?.comment || ""} />
        <h3> {project.title}</h3>
        <p> {descriptionText}</p>
      </div>
    </div>
  );
};
