"use client";
import styles from "./business.module.css";
import { TextBlock } from "@/app/components/TextBlock/TextBlock";
import React, { useEffect } from "react";
import { AccentCard } from "@/app/components/AccentCard/AccentCard";
import { Ideas } from "@/app/components/Ideas/Ideas";
import { MagazineCardLarge } from "@/app/components/Magazine/MagazineCardLarge/MagazineCardLarge";
import { useProject } from "@/app/hooks/useProject";
import { Features } from "@/app/components/Features/Features";
import { RoundFeaturesItem } from "@/app/components/RoundFeaturesItem/RoundFeaturesItem";
import { Button } from "@/app/components/Button/Button";

const BusinessPage = () => {
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
            mainText={"Услуги: бизнесу"}
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
              mainText={"О компании кратко"}
              descriptionText={"Вводка про отзывы и довольных клиентов"}
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
        </div>
      </div>
    </main>
  );
};

export default BusinessPage;
