"use client";
import React from "react";
import { IProject } from "@/app/types/IProject";
import { PHOTO_TYPE } from "@/app/types/IPhoto";
import { useRouter } from "next/navigation";

export interface ICatalogItem {
  project?: IProject;
}
export const CatalogItem = ({ project }: ICatalogItem) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/project/${project?.id}`)}
      className={"clickable"}
      style={{ maxHeight: "468px", display: "flex", flexDirection: "column" }}
    >
      <div
        className="catalogPhoto"
        style={{
          backgroundImage: `url(${project?.photos?.filter((photo) => photo.type === PHOTO_TYPE.GENERAL)[0]?.imageUrl || ""})`,
        }}
      >
        <div className="catalogContentContainer">
          <div>
            <div style={{ display: "flex" }}>
              <div className={"projectHeaderContainer"}>
                <h4 className={"projectHeader"}>{project?.title}</h4>
              </div>
            </div>
            <div style={{ display: "inline-flex", paddingTop: "9px" }}>
              {project?.series && (
                <div className={"projectSeriesContainer"}>
                  <h6 className={"projectSeries"}>{project.series.comment}</h6>
                </div>
              )}
              {project && (
                <div className="projectDiscount" style={{ marginLeft: "12px" }}>
                  <h6 className={"projectDiscountText"}> Скидка! </h6>
                </div>
              )}
            </div>
          </div>
          {!project?.isArchive && project?.price && (
            <div className={"amountContainer"}>
              <h6 className={"amountFrom"}>От</h6>
              <p className={"amountNumber"}>{project.price}</p>
              <h6 className={"amountMln"}>млн</h6>
            </div>
          )}
        </div>
      </div>
      <div className="photoFooter">
        <div style={{ display: "flex", textAlign: "center" }}>
          <h6 className={"footerText h3"}>Общая {project?.area} м²</h6>
        </div>
        <div className={"separateLine"} />
        <div style={{ display: "flex", textAlign: "center" }}>
          <h6 className={"footerText h6"}>Жилая {project?.size} м²</h6>
        </div>
        <div className={"separateLine"} />
        {/*<div style={{display: "flex", textAlign: "center"}}>*/}
        {/*    <h6 className={'footerText h6'}>*/}
        {/*        14×19 м*/}
        {/*    </h6>*/}
        {/*</div>*/}
        <div className={"separateLine"} />
        <div style={{ display: "flex", textAlign: "center" }}>
          <h6 className={"footerText h6"}>{project?.bedroomsCount} сп.</h6>
        </div>
        <div className={"separateLine"} />
        <div style={{ display: "flex", textAlign: "center" }}>
          <h6 className={"lastFooterText h6"}>{project?.bathroomCount} c/у</h6>
        </div>
      </div>
    </div>
  );
};
