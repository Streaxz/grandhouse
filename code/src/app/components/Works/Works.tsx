"use client";
import React from "react";
import { TextBlock } from "@/app/components/TextBlock/TextBlock";
import { FeatureCardSmallDarkLabel } from "@/app/components/FeatureCardSmallDarkLabel/FeatureCardSmallDarkLabel";
import { PhotoButton } from "@/app/components/PhotoButton/PhotoButton";
import { useProject } from "@/app/hooks/useProject";
import { useRouter } from "next/navigation";

export const Works: React.FC = () => {
  const { projects } = useProject();
  const router = useRouter();
  return (
    <div className={"works"}>
      <div className={"worksWrapper"}>
        <TextBlock
          rectangleColor={"#CC00FF"}
          mainText={"Наши работы говорят сами за себя"}
          descriptionText={
            "Мы построили больше 500 объектов по всей Западной России, от озер Карелии до побережья Черного моря. География постоянно расширяется."
          }
          textColor={"rgba(39, 43, 64, 1)"}
        />
        <div className={"worksImageContainer"}>
          <img
            src={"/map.png"}
            alt={"500"}
            style={{ width: "100%", position: "absolute", zIndex: 1 }}
          />
          <div className={"whiteBoxContainer"}>
            <div className={"whiteBox hiddenWhiteBox"}>
              <p style={{ color: "#272B40" }} className={"whiteBoxText"}>
                завершенных
              </p>
            </div>
            <div className={"whiteBox"}>
              <p style={{ color: "#272B40" }} className={"whiteBoxText"}>
                проектов
              </p>
            </div>
            <div className={"whiteBox"}>
              <p style={{ color: "#272B40" }} className={"whiteBoxText"}>
                в портфолио
              </p>
            </div>
          </div>
        </div>
        {projects && projects?.length > 2 && (
          <div className={"doubleItem "}>
            {projects
              ?.slice(0, 2)
              .map((project, index) => (
                <FeatureCardSmallDarkLabel
                  key={`key-${index}`}
                  descriptionText={"Нажмите для просмотра"}
                  project={project}
                />
              ))}
          </div>
        )}
        <div style={{ display: "flex", width: "83%" }}></div>
        <PhotoButton
          backgroundSrc={"/abstractPaper.jpeg"}
          buttonSrc={"/blondieWoman.png"}
          buttonText={"Отзывы на 5 звезд"}
          width={"50%"}
          onClick={() => {
            router.push("/reviews");
          }}
          descriptionText={
            "Посмотрите реальные отзывы клиентов о нашей работе на Яндекс.Картах"
          }
        />
        {/*<div className="workEllipse"></div>*/}
      </div>
    </div>
  );
};
