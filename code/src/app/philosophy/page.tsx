"use client";
import styles from "./PhilosophyPage.module.css";
import { TextBlock } from "@/app/components/TextBlock/TextBlock";
import React from "react";
import { PictureFeaturedLarge } from "@/app/components/PictureFeaturedLarge/PictureFeaturedLarge";
import { AccentCard } from "@/app/components/AccentCard/AccentCard";
import { SignedCard } from "@/app/components/SignedCard/SignedCard";
import { ItalicTextBlock } from "@/app/components/ItalicTextBlock/ItalicTextBlock";
import { PhotoButton } from "@/app/components/PhotoButton/PhotoButton";

const PhilosophyPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          <TextBlock
            rectangleColor={"#CC00FF"}
            mainText={"Философия"}
            descriptionText={
              "Вводка про философию компании. Мы строим по готовым и индивидуальным проектам - дома и любые другие строения под ключ — из камня, рубленного бревна, профилированного и клееного бруса. "
            }
            textColor={"#FFF"}
          />
          <PictureFeaturedLarge source={"/pictureFeaturedLarge.png"} />
          <AccentCard
            header={"Гуманистичность"}
            text={
              "Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной"
            }
            source={"/happyFamily.jpeg"}
          />
          <AccentCard
            header={"Профессионализм"}
            text={
              "Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной"
            }
            source={"/magazineImage.png"}
            alternative
          />
          <AccentCard
            header={"Открытость"}
            text={
              "Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной"
            }
            source={"/happyFamily.jpeg"}
          />
          <AccentCard
            header={"Ответственность"}
            text={
              "Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной"
            }
            source={"/happyFamily.jpeg"}
            alternative
          />
          <div className={"reverseItem"}>
            <SignedCard />
            <ItalicTextBlock />
          </div>
          <PhotoButton
            backgroundSrc={"/clouds.jpeg"}
            buttonSrc={"/photoButton.png"}
            buttonText={"Обсудим ваши идеи?"}
            descriptionText={
              "Наши менеджеры всегда на связи - свяжитесь с нами и мы предложим решения конкретно под ваши задачи"
            }
          />
        </div>
        <div className="philosophyEllipse"></div>
      </div>
    </main>
  );
};

export default PhilosophyPage;
