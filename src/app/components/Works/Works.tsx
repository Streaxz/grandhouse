"use client";
import React from "react";
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import {Photo} from "@/app/components/PhotoCarousel/Photo";
import {Button} from "@/app/components/Button/Button";

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
                          <div className={'doubleItemContainer'}>
                                  <Photo
                                    labelText={"Новый проект"}
                                    headerText={"House for a family"}
                                    descriptionText={"Нажмите для просмотра"}
                                  />
                          </div>
                          <div className={'doubleItemContainer'}>
                                  <Photo
                                    labelText={"Новый проект"}
                                    headerText={"House for a family"}
                                    descriptionText={"Нажмите для просмотра"}
                                  />
                          </div>
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
                  <div className="workEllipse h-16 w-16"></div>
              </div>
          </div>
        )
}