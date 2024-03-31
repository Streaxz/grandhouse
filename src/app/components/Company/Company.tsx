'use client';
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import React from "react";
import {Features} from "@/app/components/Features/Features";
import {RoundFeaturesItem} from "@/app/components/RoundFeaturesItem/RoundFeaturesItem";
import {Quote} from "@/app/components/Quote/Quote";
import {Button} from "@/app/components/Button/Button";

export const Company = () => {
    return (
      <div className={'pageContainer'} style={{
          backgroundImage: "url(https://s3-alpha-sig.figma.com/img/9f26/2b16/5e008d9f7a08e23f0f6617b865e362b4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KJDvCSyLg9WbC00wwoDeHX6bXpxkIXu8OGRYACarpre1zxlbGiQ78SV4SVXc~UgKsTx0GDuEJx~JLujPoDA5n5R2JwwRTJrsqroas8IyGNXO~GJCmnEflwBucBZGr824oYaLckkhabou4cGWNYdK2WoxM09ToRqM81nYPwxSyV72XO4tKq8HxhMKbX7~Wl8Sy7TazS74Tl0-daGbTHy2DYVI-q7sx4JbFNwISf6L3yTUeWHWvDDL5eTwKYEc0L5Kz~9zGIR8MPHcuI6EZpnHVu05NeuymL6hsp9yICoGLrUXfjnT4c9JP5Jom~Z6luqSTTvLPCWHuAAx83p8Qo11TQ__)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "saturate(100%) brightness(110%)",
      }}
      >
          <div className={'pageContainer'} style={{
              background: "linear-gradient(180deg, rgba(0, 49, 20, 0.00) 38.6%, #00250F 120%)",
          }}>
          <div className={'companyWrapper'}>
          <TextBlock
            rectangleColor={"white"}
            width={"100%"}
            mainText={"Грандхауc — это люди, технологии и материалы"}
            descriptionText={"Небольшая вводка про то, кто работает в Грандхаусе, какие технологии и материалы используются"}
            textColor={"white"}
          />
              <Features>
                  <RoundFeaturesItem
                    headerText={"Заголовок элемента"}
                    descriptionText={"Подзаголовок элемента"}
                    src={"/company.jpeg"}
                  />
                  <RoundFeaturesItem
                    headerText={"Заголовок Элемента"}
                    descriptionText={"Подзаголовок элемента"}
                    src={"/wood.jpeg"}
                  />
                  <RoundFeaturesItem
                    headerText={"Заголовок Элемента"}
                    descriptionText={"Подзаголовок элемента"}
                    src={"/autumn.jpeg"}
                    />
              </Features>
              <Quote
                quoteText={'Каждый из нас понимает очевидную вещь: внедрение современных методик обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.'}
                src={'image.png'}
                text={'Имя Фамилия, должность'}
              />
              <Button onClick={() => console.log()} buttonText={"Подробнее о компании"}/>
          </div>
          </div>
      </div>
    )
}