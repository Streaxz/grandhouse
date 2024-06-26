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
            mainText={"Грандхаус - это люди, технологии и материалы."}
            descriptionText={
              "Грандхаус основан в 2015 году в Нижнем Новгороде. Мы гордимся своими корнями и дорожим репутацией"
            }
            textColor={"white"}
          />
          <Features>
            <RoundFeaturesItem
              headerText={"лучшие профессионалы"}
              src={"/company.jpeg"}
              link={"/company"}
            />
            <RoundFeaturesItem
              headerText={"собственное производство"}
              src={"/wood.jpeg"}
              link={"/offers"}
            />
            <RoundFeaturesItem
              headerText={"передовые технологии"}
              src={"/autumn.jpeg"}
              link={"/forest"}
            />
          </Features>
          {/*TODO Добавить автора*/}
          <Quote
            quoteText={
              "Мы строим такие дома, в каких хотелось бы жить нам самим."
            }
            author={{
              position: "Основатель и руководитель Грандхауса",
              name: "Никита",
              imageUrl: "image.png",
              surname: "Кузнецов",
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
