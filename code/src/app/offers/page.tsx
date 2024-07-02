"use client";
import styles from "./offers.module.css";
import { TextBlock } from "@/app/components/TextBlock/TextBlock";
import React, { useEffect } from "react";
import { OfferPdf } from "@/app/components/OfferPdf/OfferPdf";
import { Carousel } from "@/app/components/Carousel/Carousel";
import { CatalogItem } from "@/app/components/Catalog/CatalogItem";
import { AccentCard } from "@/app/components/AccentCard/AccentCard";
import { Ideas } from "@/app/components/Ideas/Ideas";
import { MagazineCardLarge } from "@/app/components/Magazine/MagazineCardLarge/MagazineCardLarge";
import { useProject } from "@/app/hooks/useProject";

const OffersPage = () => {
  const { projects, getProjects } = useProject();

  useEffect(() => {
    const fetchData = async () => {
      await getProjects();
    };

    if (projects) {
      fetchData();
    }
  }, [getProjects, projects]);
  return (
    <main className={styles.page}>
      {/*<div*/}
      {/*  className={styles.background}*/}
      {/*  style={{*/}
      {/*    background: 'url("/office.jpeg")',*/}
      {/*    backgroundSize: "cover",*/}
      {/*    backgroundPosition: "center",*/}
      {/*    backgroundRepeat: "no-repeat",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <div*/}
      {/*    style={{*/}
      {/*      backgroundColor: "rgba(0, 0, 0, 0.1)",*/}
      {/*      width: "100%",*/}
      {/*      height: "100%",*/}
      {/*      position: "absolute",*/}
      {/*      top: 0,*/}
      {/*      left: 0,*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</div>*/}
      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          <TextBlock
            rectangleColor={"#CC00FF"}
            mainText={"Услуги"}
            descriptionText={
              "Принимая во внимание показатели успешности, выбранный нами инновационный путь требует определения и уточнения экономической целесообразности принимаемых решений."
            }
            textColor={"#FFFFFF"}
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
          <OfferPdf text={"Все услуги в одной презентации"} source={""} />
          <Ideas />
        </div>
        {/*<div className={styles.ellipse}></div>*/}
        <div
          className={`${styles.pageWrapper} ${styles.darkBackground}`}
          style={{ zIndex: 10 }}
        >
          <div className={styles.pageContainer}>
            <MagazineCardLarge />
          </div>
        </div>
        <div className={`${styles.pageWrapper}`}>
          <div className={styles.pageContainer}>
            <TextBlock
              rectangleColor={"#CC00FF"}
              textColor={"#FFF"}
              mainText={"Наши проекты"}
              descriptionText={
                "Вводка про философию компании. Мы строим по готовым и индивидуальным проектам - дома и любые другие строения под ключ — из камня, рубленного бревна, профилированного и клееного бруса."
              }
            />
            <Carousel
              swiperEffect={"slider"}
              desktopSlides={2}
              tabletSlides={2}
              mobileSlides={1}
              spaceBetween={36}
              projectsLength={projects?.length}
            >
              <CatalogItem />
              <CatalogItem />
            </Carousel>
            {/*<div className={styles.ellipse} />*/}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OffersPage;
