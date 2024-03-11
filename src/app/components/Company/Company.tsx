'use client';
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import React from "react";
import {RoundFeatures} from "@/app/components/RoundFeatures/RoundFeatures";
import {RoundFeaturesItem} from "@/app/components/RoundFeaturesItem/RoundFeaturesItem";
import {Quote} from "@/app/components/Quote/Quote";
import {Button} from "@/app/components/Button/Button";

export const Company = () => {
    return (
      <div className={'pageContainer'} style={{backgroundImage: "url(https://s3-alpha-sig.figma.com/img/9f26/2b16/5e008d9f7a08e23f0f6617b865e362b4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KJDvCSyLg9WbC00wwoDeHX6bXpxkIXu8OGRYACarpre1zxlbGiQ78SV4SVXc~UgKsTx0GDuEJx~JLujPoDA5n5R2JwwRTJrsqroas8IyGNXO~GJCmnEflwBucBZGr824oYaLckkhabou4cGWNYdK2WoxM09ToRqM81nYPwxSyV72XO4tKq8HxhMKbX7~Wl8Sy7TazS74Tl0-daGbTHy2DYVI-q7sx4JbFNwISf6L3yTUeWHWvDDL5eTwKYEc0L5Kz~9zGIR8MPHcuI6EZpnHVu05NeuymL6hsp9yICoGLrUXfjnT4c9JP5Jom~Z6luqSTTvLPCWHuAAx83p8Qo11TQ__)"}}>
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