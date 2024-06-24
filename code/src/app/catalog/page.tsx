"use client";
import styles from "./catalog.module.css";
import { TextBlock } from "@/app/components/TextBlock/TextBlock";
import React, { useEffect, useState } from "react";
import { Ideas } from "@/app/components/Ideas/Ideas";
import { Button } from "@/app/components/Button/Button";
import { FeatureCardSmallDarkLabel } from "@/app/components/FeatureCardSmallDarkLabel/FeatureCardSmallDarkLabel";
import { MagazineCardLarge } from "@/app/components/Magazine/MagazineCardLarge/MagazineCardLarge";
import { CatalogItem } from "@/app/components/Catalog/CatalogItem";
import { Filters } from "@/app/components/Filters/Filters";
import { Sberbank } from "@/app/components/Sberbank/Sberbank";
import { PhotoButton } from "@/app/components/PhotoButton/PhotoButton";
import { useProject } from "@/app/hooks/useProject";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";

export interface IFilters {
  type?: ETYPE;
  isArchive: boolean;
  year?: Date;
  serial?: string;
  priceFrom?: number;
  priceTo?: number;
  squareFrom?: number;
  squareTo?: number;
  sizeFrom?: number;
  sizeTo?: number;
  floor?: number;
  isBasement?: boolean;
  isGarage?: boolean;
  isIndividual?: boolean;
  isSerial?: boolean;
}

export enum ETYPE {
  WOOD = "WOOD",
  STONE = "STONE",
  COMBINED = "COMBINED",
  ALL = "ALL",
}

const CatalogPage = () => {
  const router = useRouter();
  const [filters, setFilters] = useState<IFilters>({
    type: ETYPE.ALL,
    isArchive: false,
  });

  const { getProjects, projects, loading } = useProject();

  useEffect(() => {
    const fetchData = async () => {
      await getProjects(filters);
    };

    if (!projects) {
      fetchData();
    }
  }, [projects]);

  console.log(projects);
  return (
    <main className={styles.page}>
      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          <TextBlock
            rectangleColor={"#CC00FF"}
            mainText={"Каталог проектов"}
            descriptionText={"Подзаголовок"}
            textColor={"#FFF"}
          />
          <Filters
            filters={filters}
            setFilters={setFilters}
            getProjects={getProjects}
          />
          {loading ? (
            <div className={styles.loaderContainer}>
              <ThreeDots
                visible={true}
                height="80"
                width="80"
                color=""
                radius="#62698C"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          ) : (
            <>
              {projects && projects.length > 0 && (
                <div className={styles.seriesContainer}>
                  {projects.slice(0, 4).map((project, index) => (
                    <a
                      onClick={() => {
                        router.push(`/project/${project.id}`);
                      }}
                      key={index}
                      className={styles.flexItem}
                    >
                      <CatalogItem project={project} />
                    </a>
                  ))}
                </div>
              )}
              <Sberbank />
              {projects && projects.slice(4).length > 0 && (
                <div className={styles.catalogContainer}>
                  {projects.slice(4).map((project, index) => (
                    <div key={index} className={styles.flexItem}>
                      <CatalogItem project={project} />
                    </div>
                  ))}
                </div>
              )}
              <Button
                onClick={async () => {
                  await getProjects(filters);
                }}
                buttonText={"Загрузить еще"}
              />
            </>
          )}
          <Ideas text={"У нас и другие проекты"} />
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
          <PhotoButton
            backgroundSrc={"/clouds.jpeg"}
            buttonSrc={"/photoButton.png"}
            buttonText={"Обсудим ваши идеи?"}
            descriptionText={
              "Наши менеджеры всегда на связи - свяжитесь с нами и мы предложим решения конкретно под ваши задачи"
            }
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
          <Button onClick={() => {}} buttonText={"Читать все отзывы"} />
          {/*<div className={styles.ellipse}></div>*/}
        </div>
      </div>
    </main>
  );
};

export default CatalogPage;
