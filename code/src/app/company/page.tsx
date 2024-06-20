"use client";
import styles from "./company.module.css";
import { TextBlock } from "@/app/components/TextBlock/TextBlock";
import React from "react";
import { Carousel } from "@/app/components/Carousel/Carousel";
import { FeatureCardPicture } from "@/app/components/FeatureCardPicture/FeatureCardPicture";
import { Features } from "@/app/components/Features/Features";
import { RoundFeaturesItem } from "@/app/components/RoundFeaturesItem/RoundFeaturesItem";
import { TextContent } from "@/app/components/TextContent/TextContent";
import { Shortcuts } from "@/app/components/Shortcuts/Shorcuts";
import { ShortcutItem } from "@/app/components/ShortcutItem/ShortcutItem";
import { RoundBlock } from "@/app/components/RoundBlock/RoundBlock";
import { PhotoButton } from "@/app/components/PhotoButton/PhotoButton";
import { EmployeeCardLarge } from "@/app/components/EmployeeCardLarge/EmployeeCardLarge";

const CompanyPage = () => {
  return (
    <main className={styles.page}>
      <div className={`${styles.pageWrapper} ${styles.lightGradient}`}>
        <div className={styles.pageContainer}>
          <TextBlock
            rectangleColor={"#CC00FF"}
            mainText={"Компания"}
            descriptionText={
              "Вводка про философию компании. Мы строим по готовым и индивидуальным проектам - дома и любые другие строения под ключ — из камня, рубленного бревна, профилированного и клееного бруса. "
            }
            textColor={"#FFF"}
          />
          <Carousel swiperEffect={"slider"} isPagination={true}>
            <FeatureCardPicture
              src={"company.jpeg"}
              descriptionText={"Подпись"}
            />
            <FeatureCardPicture
              src={"company.jpeg"}
              descriptionText={"Подпись"}
            />
          </Carousel>
        </div>
      </div>
      <div className={`${styles.pageWrapper} ${styles.darkBackground}`}>
        <div className={styles.pageContainer}>
          <TextBlock
            rectangleColor={"#CC00FF"}
            textColor={"#FFF"}
            mainText={" Грандхаус - это..."}
          />
          <Features>
            <RoundFeaturesItem
              headerText={"10 инженеров"}
              descriptionText={"Подзаголовок элемента"}
              src={"/company.jpeg"}
              link={"/company"}
            />
            <RoundFeaturesItem
              headerText={"Свое производство"}
              descriptionText={"Подзаголовок элемента"}
              src={"/wood.jpeg"}
              link={"/offers"}
            />
            <RoundFeaturesItem
              headerText={"Проектный отдел"}
              descriptionText={"Подзаголовок элемента"}
              src={"/autumn.jpeg"}
              link={"/forest"}
            />
          </Features>
          <TextContent
            text={
              "Принимая во внимание показатели успешности, выбранный нами инновационный путь требует определения и уточнения экономической целесообразности принимаемых решений. Не следует, однако, забывать, что высокотехнологичная концепция общественного уклада способствует повышению качества первоочередных требований. Таким образом, сплочённость команды профессионалов представляет собой интересный эксперимент проверки вывода текущих активов. Прежде всего, существующая теория требует от нас анализа переосмысления внешнеэкономических политик. Принимая во внимание показатели успешности, убеждённость некоторых оппонентов играет определяющее значение для системы массового участия."
            }
          />
          {/*//TODO Поставить автора*/}
          {/*	<Quote*/}
          {/*		quoteText={"Каждый из нас понимает очевидную вещь: внедрение современных методик обеспечивает широкому кругу (специалистов) участие в формировании новых предложений."}*/}
          {/*		src={"/image.png"}*/}
          {/*		text={"Имя Фамилия, Должность"}*/}
          {/*	/>*/}
          <Carousel swiperEffect={"slider"} isPagination={true}>
            <FeatureCardPicture
              src={"company.jpeg"}
              descriptionText={"Подпись"}
            />
            <FeatureCardPicture
              src={"company.jpeg"}
              descriptionText={"Подпись"}
            />
          </Carousel>
        </div>
      </div>
      <div className={styles.pageWrapper}>
        <div className={styles.shortcutContainer}>
          <Shortcuts backgroundColor={"#000"}>
            <ShortcutItem
              emoji={"/burningHeart.png"}
              title={"Юридическая информация"}
              description={"Поздаголовок ярлыка"}
              color={"#FFF"}
              descriptionColor={"#62698C"}
            />
            <ShortcutItem
              emoji={"/triangleLinear.png"}
              title={"Вакансии"}
              description={"Поздаголовок ярлыка"}
              color={"#FFF"}
              descriptionColor={"#62698C"}
            />
          </Shortcuts>
        </div>
      </div>
      <div className={`${styles.pageWrapper} ${styles.darkGradient}`}>
        <div className={styles.pageContainer}>
          <TextBlock
            rectangleColor={"#CC00FF"}
            textColor={"#FFF"}
            mainText={"Люди"}
            descriptionText={
              "Вводка про философию компании. Мы строим по готовым и индивидуальным проектам - дома и любые другие строения под ключ — из камня, рубленного бревна, профилированного и клееного бруса."
            }
          />
          <Carousel
            isPagination={false}
            swiperEffect={"slide"}
            desktopSlides={5}
            tabletSlides={4}
            mobileSlides={2}
            spaceBetween={12}
            isActive={true}
          >
            <RoundBlock
              src={"/image.png"}
              text={"Длинноеимя Длиннаяфамилия, должность"}
            />
            <RoundBlock
              src={"/image.png"}
              text={"Длинноеимя Длиннаяфамилия, должность"}
            />
            <RoundBlock
              src={"/image.png"}
              text={"Длинноеимя Длиннаяфамилия, должность"}
            />
            <RoundBlock
              src={"/image.png"}
              text={"Длинноеимя Длиннаяфамилия, должность"}
            />
            <RoundBlock
              src={"/image.png"}
              text={"Длинноеимя Длиннаяфамилия, должность"}
            />
          </Carousel>
          <EmployeeCardLarge
            src={"/worker.jpeg"}
            headerText={
              "Имя Фамилия, строили с нами 150-метровый каменный дом по проекту “Грандхаус-1” в Московской области"
            }
            descriptionText={
              "Небольшой отзыв от одной  из семей, построивших дом своей мечты с Грандхаусом. Лаконичная благо-желательная цитата, описывающая, насколько довольна семья работой компании и взаимодействием с ее сотрудниками"
            }
            link={"/"}
          />
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
    </main>
  );
};

export default CompanyPage;
