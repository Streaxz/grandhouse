import { LabelDark } from "@/app/components/Labels/LabelDark/LabelDark";
import React from "react";
import { useRouter } from "next/navigation";
import { IProject } from "@/app/types/IProject";

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
        backgroundImage: `url(/house.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="featureCardSmallDarkLabelGradient" />
      <div className="featureCardSmallDarkLabelContent">
        <LabelDark text={project.series?.comment || ""} />
        <h3> {project.title}</h3>
        <p> {descriptionText}</p>
      </div>
    </div>
  );
};
