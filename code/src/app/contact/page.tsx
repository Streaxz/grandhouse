"use client";
import styles from "./company.module.css";
import { TextBlock } from "@/app/components/TextBlock/TextBlock";
import React from "react";
import { Features } from "@/app/components/Features/Features";
import { Button } from "@/app/components/Button/Button";
import { AmoCrmModal } from "@/app/components/Modal/AmoCrmModal";
import { RoundFeaturesItem } from "@/app/components/RoundFeaturesItem/RoundFeaturesItem";

const ContactPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          <TextBlock
            rectangleColor={"#CC00FF"}
            mainText={"Страница заявки"}
            descriptionText={
              "Вводка про философию компании. Мы строим по готовым и индивидуальным проектам - дома и любые другие строения под ключ — из камня, рубленного бревна, профилированного и клееного бруса."
            }
            textColor={"#FFF"}
          />
          <AmoCrmModal isModal={false} />
          <TextBlock
            rectangleColor={"#CC00FF"}
            mainText={"О компании кратко"}
            descriptionText={
              "Принимая во внимание показатели успешности, выбранный нами инновационный путь требует определения и уточнения экономической целесообразности принимаемых решений. Не следует, однако, забывать, что высокотехнологичная концепция общественного уклада способствует повышению качества первоочередных требований. Таким образом, сплочённость команды профессионалов представляет собой интересный эксперимент проверки вывода текущих активов."
            }
            textColor={"#FFF"}
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
          <Button onClick={() => {}} buttonText={"Подробнее о компании"} />
        </div>
        {/*<div className="philosophyEllipse"></div>*/}
      </div>
    </main>
  );
};

export default ContactPage;
