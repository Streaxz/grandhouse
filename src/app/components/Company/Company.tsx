'use client';
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import React from "react";
import {RoundFeatures} from "@/app/components/RoundFeatures/RoundFeatures";
import {RoundFeaturesItem} from "@/app/components/RoundFeaturesItem/RoundFeaturesItem";
import {Quote} from "@/app/components/Quote/Quote";
import {Button} from "@/app/components/Button/Button";

export const Company = () => {
    return (
      <div className={'pageContainer'} style={{backgroundImage: "url(/backGroundForest.jpeg)"}}>
          <div className={'companyWrapper'}>
          <TextBlock
            rectangleColor={"white"}
            mainText={"Грандхауc — это люди, технологии и материалы"}
            descriptionText={"testsetstest"}
            textColor={"white"}
          />
              <RoundFeatures>
                  <RoundFeaturesItem
                    headerText={"Заголовок Элемента"}
                    descriptionText={"Подзаголовок элемента"}
                    src={"https://s3-alpha-sig.figma.com/img/a289/e84d/c0d59418db7d7633ab18d3f297d5db92?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E~v5KD34FybKu65JAP6p75E3A-pzc9zZXAHnXTBwspNELsJIPkBu~PgVFk1BUi798wiZ6MV4WooY45IL0juYkX4fadhGfu69xbkuLnIfLWrzYPOKxvdn2Co95bAwQJLzl72dNeFVDYP2N~KOLJ9LP7bTJi6SP4IBGobh9xA51o7qr1m~1N9GD29buTLJoC3PB7eeEi2NkhE9cnMLy6kjfaaDcqOA1z9Ur2deOhKIqbNHBy8~H7SyDBCNfl~tjejqAqSbl86xUez4AmBVf7Mh-s7UlmAONZ-oa5OkYYTLuUlb8YCD9kR2XZHyTeHQkcjgMbHyeoJF5YZIDjajAMOAAg__"}
                  />
                  <RoundFeaturesItem
                    headerText={"Заголовок Элемента"}
                    descriptionText={"Подзаголовок элемента"}
                    src={"https://s3-alpha-sig.figma.com/img/a289/e84d/c0d59418db7d7633ab18d3f297d5db92?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E~v5KD34FybKu65JAP6p75E3A-pzc9zZXAHnXTBwspNELsJIPkBu~PgVFk1BUi798wiZ6MV4WooY45IL0juYkX4fadhGfu69xbkuLnIfLWrzYPOKxvdn2Co95bAwQJLzl72dNeFVDYP2N~KOLJ9LP7bTJi6SP4IBGobh9xA51o7qr1m~1N9GD29buTLJoC3PB7eeEi2NkhE9cnMLy6kjfaaDcqOA1z9Ur2deOhKIqbNHBy8~H7SyDBCNfl~tjejqAqSbl86xUez4AmBVf7Mh-s7UlmAONZ-oa5OkYYTLuUlb8YCD9kR2XZHyTeHQkcjgMbHyeoJF5YZIDjajAMOAAg__"}
                  />
                  <RoundFeaturesItem
                    headerText={"Заголовок Элемента"}
                    descriptionText={"Подзаголовок элемента"}
                    src={"https://s3-alpha-sig.figma.com/img/a289/e84d/c0d59418db7d7633ab18d3f297d5db92?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E~v5KD34FybKu65JAP6p75E3A-pzc9zZXAHnXTBwspNELsJIPkBu~PgVFk1BUi798wiZ6MV4WooY45IL0juYkX4fadhGfu69xbkuLnIfLWrzYPOKxvdn2Co95bAwQJLzl72dNeFVDYP2N~KOLJ9LP7bTJi6SP4IBGobh9xA51o7qr1m~1N9GD29buTLJoC3PB7eeEi2NkhE9cnMLy6kjfaaDcqOA1z9Ur2deOhKIqbNHBy8~H7SyDBCNfl~tjejqAqSbl86xUez4AmBVf7Mh-s7UlmAONZ-oa5OkYYTLuUlb8YCD9kR2XZHyTeHQkcjgMbHyeoJF5YZIDjajAMOAAg__"}
                  />
              </RoundFeatures>
              <Quote
                quoteText={'Каждый из нас понимает очевидную вещь: внедрение современных методик обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.'}
                src={'image.png'}
                text={'Имя Фамилия, должность'}
              />
              <Button onClick={() => console.log()} buttonText={"Подробнее о компании"}/>
          </div>
      </div>
    )
}