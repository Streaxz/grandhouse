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
          backgroundImage: "url(/forestUpperView.jpeg)",
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