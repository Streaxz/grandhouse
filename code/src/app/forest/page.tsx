"use client";
import styles from "./forestPage.module.css";
import { TextBlock } from "@/app/components/TextBlock/TextBlock";
import React from "react";
import { AccentCard } from "@/app/components/AccentCard/AccentCard";
import { Features } from "@/app/components/Features/Features";
import { RectangleFeature } from "@/app/components/RectangleFeature/RectangleFeature";
import { Carousel } from "@/app/components/Carousel/Carousel";
import { FeatureCardPicture } from "@/app/components/FeatureCardPicture/FeatureCardPicture";
import { TextContent } from "@/app/components/TextContent/TextContent";
import { OfferPdf } from "@/app/components/OfferPdf/OfferPdf";
import { Ideas } from "@/app/components/Ideas/Ideas";
import { Button } from "@/app/components/Button/Button";
import { ReviewCardSmall } from "@/app/components/ReviewCardSmall/ReviewCardSmall";

const ProjectPage = () => {
  return (
    <main className={styles.page}>
      <div
        className={styles.background}
        style={{
          background: 'url("/forest.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <div className={styles.imageGradient}>
          <div className={styles.pageContainer}>
            <TextBlock
              rectangleColor={"#CC00FF"}
              mainText={"Лес"}
              descriptionText={
                "Вводка про философию компании. Мы строим по готовым и индивидуальным проектам - дома и любые другие строения под ключ — из камня, рубленного бревна, профилированного и клееного бруса. "
              }
              textColor={"#FFF"}
            />
          </div>
        </div>
      </div>
      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          {/*TODO добавить автора*/}
          {/*<Quote quoteText={*/}
          {/*		'Каждый из нас понимает очевидную вещь: внедрение современных методик обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.'*/}
          {/*} src={*/}
          {/*		'image.png'*/}
          {/*} text={*/}
          {/*		'Имя Фамилия, должность'*/}
          {/*}*/}
          {/*/>*/}
          <TextBlock
            rectangleColor={"#CC00FF"}
            mainText={"Услуги"}
            descriptionText={
              "Вводка про философию компании. Мы строим по готовым и индивидуальным проектам - дома и любые другие строения под ключ — из камня, рубленного бревна, профилированного и клееного бруса. "
            }
            textColor={"#272B40"}
          />
          <AccentCard
            header={"Индивидуальное проектирование"}
            text={
              "Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной"
            }
            source={"/happyFamily.jpeg"}
          />
          <AccentCard
            header={"Отделочные работы"}
            text={
              "Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной"
            }
            source={"/magazineImage.png"}
            alternative
          />
          <AccentCard
            header={"Участки для строительства"}
            text={
              "Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной"
            }
            source={"/happyFamily.jpeg"}
          />
          <AccentCard
            header={"Бизнесу"}
            text={
              "Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной"
            }
            source={"/happyFamily.jpeg"}
            alternative
          />
        </div>
        <div className="philosophyEllipse"></div>
      </div>
      <div className={`${styles.pageWrapper} ${styles.darkBackground}`}>
        <div className={styles.pageContainer}>
          <TextBlock
            rectangleColor={"#CC00FF"}
            mainText={"Профили и сечения"}
            descriptionText={
              "Вводка про философию компании. Мы строим по готовым и индивидуальным проектам - дома и любые другие строения под ключ — из камня, рубленного бревна, профилированного и клееного бруса."
            }
            textColor={"#FFF"}
          />
          <Features>
            <RectangleFeature
              src={"/image.png"}
              headerText={"Специальный"}
              descriptionText={"Основной текст"}
            />
            <RectangleFeature
              src={"/image.png"}
              headerText={"Специальный"}
              descriptionText={"Основной текст"}
            />
            <RectangleFeature
              src={"/image.png"}
              headerText={"Специальный"}
              descriptionText={"Основной текст"}
            />
            <RectangleFeature
              src={"/image.png"}
              headerText={"Специальный"}
              descriptionText={"Основной текст"}
            />
          </Features>
        </div>
      </div>
      <div className={`${styles.pageWrapper} ${styles.darkBackground}`}>
        <div className={styles.pageContainer}>
          <TextBlock
            rectangleColor={"#CC00FF"}
            mainText={"Технология производства"}
            descriptionText={
              "Вводка про философию компании. Мы строим по готовым и индивидуальным проектам - дома и любые другие строения под ключ — из камня, рубленного бревна, профилированного и клееного бруса."
            }
            textColor={"#FFF"}
          />
          <Carousel isPagination={true} swiperEffect={"slide"}>
            <FeatureCardPicture
              descriptionText={"Подпись"}
              src={"forest.jpeg"}
            />
            <FeatureCardPicture
              descriptionText={"Нажмите для просмотра"}
              src={"forest.jpeg"}
            />
          </Carousel>
          <TextContent
            text={
              "Принимая во внимание показатели успешности, выбранный нами инновационный путь требует определения и уточнения экономической целесообразности принимаемых решений. Не следует, однако, забывать, что высокотехнологичная концепция общественного уклада способствует повышению качества первоочередных требований. Таким образом, сплочённость команды профессионалов представляет собой интересный эксперимент проверки вывода текущих активов. Прежде всего, существующая теория требует от нас анализа переосмысления внешнеэкономических политик. Принимая во внимание показатели успешности, убеждённость некоторых оппонентов играет определяющее значение для системы массового участия."
            }
          />
          <OfferPdf text={"Полный прайс-лист"} source={"test"} />
          <Ideas />
        </div>
      </div>
      <div className={`${styles.pageWrapper}`}>
        <div className={styles.pageContainer}>
          <TextBlock
            rectangleColor={"#CC00FF"}
            textColor={"#FFF"}
            mainText={"Отзывы на 5 звезд"}
            descriptionText={"Вводка про отзывы и довольных клиентов"}
          />
          <Carousel
            swiperEffect={"slide"}
            desktopSlides={2}
            tabletSlides={2}
            mobileSlides={1}
          >
            <ReviewCardSmall />
            <ReviewCardSmall />
          </Carousel>
          <Button onClick={() => {}} buttonText={"Читать все отзывы"} />
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
