"use client";
import styles from "./offers.module.css";
import { TextBlock } from "@/app/components/TextBlock/TextBlock";
import React from "react";
import { OfferPdf } from "@/app/components/OfferPdf/OfferPdf";
import { FeatureCardYouTube } from "@/app/components/FeatureCardYouTube/FeatureCardYouTube";
import { MagazineCardLarge } from "@/app/components/Magazine/MagazineCardLarge/MagazineCardLarge";
import { Carousel } from "@/app/components/Carousel/Carousel";
import { CatalogItem } from "@/app/components/Catalog/CatalogItem";
import { FeatureCardPicture } from "@/app/components/FeatureCardPicture/FeatureCardPicture";
import { CarouselAnimated } from "@/app/components/CarouselAnimated/CarouselAnimated";
import { FeatureCardPictureAnimated } from "@/app/components/FeatureCardPictureAnimated/FeatureCardPictureAnimated";
import { TextContent } from "@/app/components/TextContent/TextContent";
import { PhotoButton } from "@/app/components/PhotoButton/PhotoButton";

const OffersPage = () => {
  return (
    <main className={styles.page}>
      <div
        className={styles.background}
        style={{
          background: 'url("/office.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <div className={styles.pageContainer}>
          <TextBlock
            rectangleColor={"#CC00FF"}
            mainText={"Проектирование современных домов"}
            textColor={"#FFF"}
          />
        </div>
      </div>
      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          <TextBlock
            rectangleColor={"#CC00FF"}
            mainText={"Ответы на все вопросы в видео"}
            descriptionText={
              "Принимая во внимание показатели успешности, выбранный нами инновационный путь требует определения и уточнения экономической целесообразности принимаемых решений."
            }
            textColor={"#272B40"}
          />
          <FeatureCardYouTube src={"/WildCut.png"} />
          <MagazineCardLarge />
          <TextBlock
            rectangleColor={"#CC00FF"}
            textColor={"#272B40"}
            mainText={"Примеры наших проектов"}
            descriptionText={
              "Принимая во внимание показатели успешности, выбранный нами инновационный путь требует определения и уточнения экономической целесообразности принимаемых решений."
            }
          />
          <Carousel
            swiperEffect={"slider"}
            desktopSlides={2}
            tabletSlides={2}
            mobileSlides={1}
            spaceBetween={36}
            isActive={false}
          >
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
          </Carousel>
        </div>
        <div className={styles.ellipse}></div>
        <div className={`${styles.pageWrapper} ${styles.darkBackground}`}>
          <div className={styles.pageContainer}>
            <TextBlock
              rectangleColor={"#CC00FF"}
              textColor={"#FFF"}
              mainText={"Команда и архитекторы"}
              descriptionText={
                "Принимая во внимание показатели успешности, выбранный нами инновационный путь требует определения и уточнения экономической целесообразности принимаемых решений."
              }
            />
            <Carousel
              swiperEffect={"slider"}
              isPagination={true}
              isActive={false}
            >
              <FeatureCardPicture
                src={"company.jpeg"}
                descriptionText={"Подпись"}
              />
              <FeatureCardPicture
                src={"forest.jpeg"}
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
              mainText={"Этапы проектирования карточка инфографика"}
              descriptionText={
                "Принимая во внимание показатели успешности, выбранный нами инновационный путь требует определения и уточнения экономической целесообразности принимаемых решений."
              }
            />
            <CarouselAnimated isPagination={true}>
              <FeatureCardPictureAnimated src={"/animated.jpeg"} />
              <FeatureCardPictureAnimated src={"/animated.jpeg"} />
              <FeatureCardPictureAnimated src={"/animated.jpeg"} />
              <FeatureCardPictureAnimated src={"/animated.jpeg"} />
            </CarouselAnimated>
          </div>
        </div>
        <div className={`${styles.pageWrapper} ${styles.darkBackground}`}>
          <div className={styles.pageContainer}>
            <TextBlock
              rectangleColor={"#CC00FF"}
              textColor={"#FFF"}
              mainText={"Стоимость и что в нее входит"}
              descriptionText={
                "Вводка про философию компании. Мы строим по готовым и индивидуальным проектам - дома и любые другие строения под ключ — из камня, рубленного бревна, профилированного и клееного бруса."
              }
            />
            <Carousel
              swiperEffect={"slider"}
              isPagination={true}
              isActive={false}
            >
              <FeatureCardPicture
                src={"forest.jpeg"}
                descriptionText={"Подпись"}
              />
              <FeatureCardPicture
                src={"company.jpeg"}
                descriptionText={"Подпись"}
              />
              <FeatureCardPicture
                src={"forest.jpeg"}
                descriptionText={"Подпись"}
              />
            </Carousel>
            <TextContent
              text={
                "Принимая во внимание показатели успешности, выбранный нами инновационный путь требует определения и уточнения экономической целесообразности принимаемых решений. Не следует, однако, забывать, что высокотехнологичная концепция общественного уклада способствует повышению качества первоочередных требований. Таким образом, сплочённость команды профессионалов представляет собой интересный эксперимент проверки вывода текущих активов. Прежде всего, существующая теория требует от нас анализа переосмысления внешнеэкономических политик. Принимая во внимание показатели успешности, убеждённость некоторых оппонентов играет определяющее значение для системы массового участия."
              }
            />
            <OfferPdf text={"Полный прайс-лист"} source={"test"} />
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
      </div>
    </main>
  );
};

export default OffersPage;
