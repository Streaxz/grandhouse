"use client";
import React from "react";
import { LabelSmall } from "@/app/components/Labels/LabelSmall/LabelSmall";
import { IProject } from "@/app/types/IProject";
import { PHOTO_TYPE } from "@/app/types/IPhoto";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface IPhotoProps {
  labelText: string;
  headerText: string;
  descriptionText: string;
  project: IProject;
}
export const FeatureCardLarge = ({ descriptionText, project }: IPhotoProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/project/${project?.id}`);
      }}
      className={"featureCardLarge"}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        objectFit={"cover"}
        fill
        className={"featureCardLarge"}
        style={{ zIndex: -5 }}
        alt={"project"}
        src={`/${project?.photos?.filter((photo) => photo.type === PHOTO_TYPE.GENERAL)[0]?.imageUrl || ""}`}
      />
      <div className="photoGradient" />
      <div className="featureCardLargeContainer">
        {project?.series && <LabelSmall text={project?.series.comment || ""} />}
        <h3> {project?.title}</h3>
        <p> {descriptionText}</p>
      </div>
    </div>
  );
};
