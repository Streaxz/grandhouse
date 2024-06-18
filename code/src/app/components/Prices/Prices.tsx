"use client";
import { TextBlock } from "@/app/components/TextBlock/TextBlock";
import { Infographics } from "@/app/components/Infographics/Infographics";
import { Sberbank } from "@/app/components/Sberbank/Sberbank";
import { PhotoButton } from "@/app/components/PhotoButton/PhotoButton";
import React from "react";

export interface IPagesProps {}
export const Prices = ({}: IPagesProps) => {
  return (
    <div className={"pricesContainer"}>
      <div className={"pricesWrapper"}>
        {/*<div className={'rectanglePercent'} style={{*/}
        {/*		background: `url(/RectanglePercent.png), lightgray 50% / cover no-repeat`*/}
        {/*}}/>*/}
        {/*<div style={{*/}
        {/*		position: "absolute",*/}
        {/*		zIndex: 6,*/}
        {/*		background: `url(/RectanglePercent.png)`,*/}
        {/*		backgroundSize: "cover",*/}
        {/*		backgroundPosition: "center",*/}
        {/*		backgroundRepeat: "no-repeat",*/}
        {/*		width: "86%",*/}
        {/*		height: "871px",*/}

        {/*		opacity: 1*/}

        {/*}}></div>*/}
        <TextBlock
          rectangleColor={"#C0F"}
          textColor={"#272B40"}
          mainText={"Обоснованные цены и ипотека для всех"}
          descriptionText={
            "Небольшая вводка о ценовой политике и доступности ипотеке, а также о партнерах-банках, с которыми работает компания. Информация о том, что на каждой странице проекта есть полная смета и калькулятор"
          }
        />
        <Infographics />
        <Sberbank />
        <PhotoButton
          backgroundSrc={"/clouds.jpeg"}
          buttonSrc={"/photoButton.png"}
          buttonText={"Обсудим ваши идеи?"}
          descriptionText={
            "Наши менеджеры всегда на связи - свяжитесь с нами и мы предложим решения конкретно под ваши задачи"
          }
        />
      </div>
    </div>
  );
};
