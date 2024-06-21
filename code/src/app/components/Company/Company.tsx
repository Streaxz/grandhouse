"use client";
import { TextBlock } from "@/app/components/TextBlock/TextBlock";
import React from "react";
import { Features } from "@/app/components/Features/Features";
import { RoundFeaturesItem } from "@/app/components/RoundFeaturesItem/RoundFeaturesItem";
import { Quote } from "@/app/components/Quote/Quote";
import { Button } from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const Company = () => {
  const router = useRouter();
  return (
    <div
      className={"pageContainer"}
      style={{
        // backgroundImage: "url(/forestUpperView.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "saturate(100%) brightness(110%)",
      }}
    >
      <Image
        objectFit={"cover"}
        style={{
          filter: "saturate(100%) brightness(110%)",
        }}
        fill
        src={`/forestUpperView.jpeg`}
        alt="background"
      />
      <div
        className={"pageContainer"}
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 49, 20, 0.00) 38.6%, #00250F 120%)",
        }}
      >
        <div className={"companyWrapper"}>
          <TextBlock
            rectangleColor={"white"}
            width={"100%"}
            mainText={"Грандхауc — это люди, технологии и материалы"}
            descriptionText={
              "Небольшая вводка про то, кто работает в Грандхаусе, какие технологии и материалы используются"
            }
            textColor={"white"}
          />
          <Features>
            <RoundFeaturesItem
              headerText={"Заголовок элемента"}
              descriptionText={"Подзаголовок элемента"}
              src={"/company.jpeg"}
              link={"/company"}
            />
            <RoundFeaturesItem
              headerText={"Заголовок Элемента"}
              descriptionText={"Подзаголовок элемента"}
              src={"/wood.jpeg"}
              link={"/offers"}
            />
            <RoundFeaturesItem
              headerText={"Заголовок Элемента"}
              descriptionText={"Подзаголовок элемента"}
              src={"/autumn.jpeg"}
              link={"/forest"}
            />
          </Features>
          {/*TODO Добавить автора*/}
          <Quote
            quoteText={
              "Каждый из нас понимает очевидную вещь: внедрение современных методик обеспечивает широкому кругу (специалистов) участие в формировании новых предложений."
            }
            author={{
              position: "Инженер",
              name: "Александр",
              imageUrl: "image.png",
              surname: "Ломоносов",
              id: 1,
            }}
          />
          <Button
            onClick={() => router.push("/company")}
            buttonText={"Подробнее о компании"}
          />
        </div>
      </div>
    </div>
  );
};
