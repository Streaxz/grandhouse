"use client";
import React from "react";
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import {Button} from "@/app/components/Button/Button";
import {FeatureCardSmallDarkLabel} from "@/app/components/featureCardSmallDarkLabel/FeatureCardSmallDarkLabel";

export const Works: React.FC = () => {
    return (
      <div className={'works'}>
          <div className={'worksWrapper'}>
              <TextBlock
                rectangleColor={"#CC00FF"}
                mainText={"Наши работы говорят за себя"}
                descriptionText={"Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России. Нас знают в Москве, Нижнем Новгороде и других городах."}
                textColor={"rgba(39, 43, 64, 1)"}
              />
              <img
                src={'/map.png'}
                alt={"500"}
                style={{width: "83%", position: "relative", zIndex: 1}}
              />
              <div className={'doubleItem'}>
                  <FeatureCardSmallDarkLabel
                    headerText={"House for a family"}
                    descriptionText={"Нажмите для просмотра"}
                  />
                  <FeatureCardSmallDarkLabel
                    headerText={"House for a family"}
                    descriptionText={"Нажмите для просмотра"}
                  />
              </div>
              <div style={{display: "flex", justifyContent: "center",}}>
                  <Button
                    onClick={() => {
                        console.log("click!")
                    }}
                    buttonText={"Архив и карта работ"}
                  />
              </div>
              <div style={{display: "flex", width: "83%"}}>
              </div>
              <div className="workEllipse"></div>
          </div>
      </div>
    )
}