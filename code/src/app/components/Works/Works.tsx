"use client";
import React from "react";
import { TextBlock } from "@/app/components/TextBlock/TextBlock";
import { FeatureCardSmallDarkLabel } from "@/app/components/FeatureCardSmallDarkLabel/FeatureCardSmallDarkLabel";
import { PhotoButton } from "@/app/components/PhotoButton/PhotoButton";
import { useProject } from "@/app/hooks/useProject";

export const Works: React.FC = () => {
  const { projects } = useProject();
  return (
    <div className={"works"}>
      <div className={"worksWrapper"}>
        <TextBlock
          rectangleColor={"#CC00FF"}
          mainText={"Наши работы говорят за себя"}
          descriptionText={
            "Вводка до 200 знаков. Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России. Нас знают в Москве, Нижнем Новгороде и других городах."
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
          backgroundSrc={"/clouds.jpeg"}
          buttonSrc={"/photoButton.png"}
          buttonText={"Обсудим ваши идеи?"}
          descriptionText={
            "Наши менеджеры всегда на связи - свяжитесь с нами и мы предложим решения конкретно под ваши задачи"
          }
        />
        <div className="workEllipse"></div>
      </div>
    </div>
  );
};
