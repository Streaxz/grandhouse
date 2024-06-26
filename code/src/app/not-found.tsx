"use client";
import styles from "./notFound.module.css";
import React from "react";
import { TextBlock } from "@/app/components/TextBlock/TextBlock";
import { Carousel } from "@/app/components/Carousel/Carousel";
import { CatalogItem } from "@/app/components/Catalog/CatalogItem";
import { Ideas } from "@/app/components/Ideas/Ideas";

const MagazinePage = () => {
  // useEffect(() => {
  //   const header = document.getElementById("header")!;
  //   header.style.background = "#878faf";
  // }, []);
  return (
    <main className={styles.page}>
      <div className={`${styles.pageWrapper}`}>
        <div className={styles.pageContainer}>
          <TextBlock
            rectangleColor={"#FFF"}
            textColor={"#FFF"}
            mainText={"Страница не найдена"}
            descriptionText={
              "Вводка про философию компании. Мы строим по готовым и индивидуальным проектам - дома и любые другие строения под ключ — из камня, рубленного бревна, профилированного и клееного бруса. Посмотрите наши проекты:"
            }
          />
          <Carousel
            swiperEffect={"slider"}
            desktopSlides={2}
            tabletSlides={2}
            mobileSlides={1}
            spaceBetween={36}
          >
            <CatalogItem />
            <CatalogItem />
          </Carousel>
          <Ideas />
        </div>
      </div>
    </main>
  );
};

export default MagazinePage;
