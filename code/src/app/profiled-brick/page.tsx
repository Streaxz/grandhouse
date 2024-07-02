"use client";
import styles from "./profiled-brick.module.css";
import { TextBlock } from "@/app/components/TextBlock/TextBlock";
import React, { useEffect } from "react";
import { OfferPdf } from "@/app/components/OfferPdf/OfferPdf";
import { AccentCard } from "@/app/components/AccentCard/AccentCard";
import { Ideas } from "@/app/components/Ideas/Ideas";
import { MagazineCardLarge } from "@/app/components/Magazine/MagazineCardLarge/MagazineCardLarge";
import { useProject } from "@/app/hooks/useProject";
import { Features } from "@/app/components/Features/Features";
import { Button } from "@/app/components/Button/Button";
import { RectangleFeature } from "@/app/components/RectangleFeature/RectangleFeature";
import { FeatureCardSmallDarkLabel } from "@/app/components/FeatureCardSmallDarkLabel/FeatureCardSmallDarkLabel";

const ProfiledBrickPage = () => {
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
            mainText={"Лес: профилированный брус"}
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
        <div className={`${styles.pageWrapper}`} style={{ zIndex: 10 }}>
          <div className={styles.pageContainer}>
            <TextBlock
              rectangleColor={"#CC00FF"}
              textColor={"#FFF"}
              mainText={"Цены на профилированный брус"}
              descriptionText={"Вводка про отзывы и довольных клиентов"}
            />
            <OfferPdf text={"Полный прайс-лист"} source={"/"} />
          </div>
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
            <MagazineCardLarge />
          </div>
        </div>
        <div className={`${styles.pageWrapper}`}>
          <div className={styles.pageContainer}>
            <TextBlock
              rectangleColor={"#CC00FF"}
              textColor={"#FFF"}
              mainText={"Отзывы"}
              descriptionText={"Вводка про отзывы и довольных клиентов"}
            />
            {projects && projects?.length > 2 && (
              <div className={"doubleItem"}>
                {projects
                  ?.slice(0, 2)
                  .map((project, index) => (
                    <FeatureCardSmallDarkLabel
                      key={`key-${index}`}
                      descriptionText={"Нажмите для просмотра"}
                      project={project}
                    />
                  ))}
              </div>
            )}
            <Button onClick={() => {}} buttonText={"Отзывы и карта работ"} />
            {/*<div className={styles.ellipse}></div>*/}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfiledBrickPage;
