"use client";
import "../../App.css";
import React, { useEffect, useState } from "react";
import { CatalogItem } from "@/app/components/Catalog/CatalogItem";
import { Button } from "@/app/components/Button/Button";
import { Carousel } from "@/app/components/Carousel/Carousel";
import { useRouter } from "next/navigation";
import { IProject } from "@/app/utils/types/IProject";
import { random } from "@ctrl/tinycolor";
import Image from "next/image";

export interface ICatalogProps {
  projects: IProject[];
}
export const Catalog = ({ projects }: ICatalogProps) => {
  const router = useRouter();
  const [numOfPhotos, setNumOfPhotos] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768 && width > 500) {
        setNumOfPhotos(6);
      } else if (width <= 500) {
        setNumOfPhotos(4);
      } else {
        setNumOfPhotos(7);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Вызываем один раз при монтировании, чтобы установить начальное количество фото
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //TODO: сделать рандомные фотки в количестве 10 штук
  const roundPhotos = projects.slice(0, numOfPhotos).map((project, index) => (
    <div
      onClick={() => {
        router.push(`/project/${project.id}`);
      }}
      key={`round-photo-${index}`}
      className="roundPhoto"
    >
      <Image
        objectFit={"cover"}
        fill
        className={"roundPhoto"}
        alt={"project"}
        src={`/autumn.png`}
      />
    </div>
  ));

  return (
    <>
      <div className="catalogContainer">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "36px",
          }}
        >
          <div className={"logoCatalog"}>
            <Image src={`/logo_catalog.svg`} alt={"logo"} fill />
          </div>
          <p>Мы предлагаем готовые проекты: </p>
          <p style={{ textAlign: "left" }}>
            - серийные, с выбором исполнения и планировки; <br />
            - готовые фирменные проекты; <br />
            Ваш дом где-то здесь! <br />
          </p>
        </div>
      </div>
      {projects.length > 0 && (
        <Carousel
          swiperEffect={"slider"}
          desktopSlides={2}
          tabletSlides={2}
          mobileSlides={1}
          spaceBetween={36}
          projectsLength={projects.length}
        >
          {projects.map((project) => (
            <CatalogItem project={project} key={`catalog-${random()}`} />
          ))}
        </Carousel>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        {/*{roundPhotos}*/}
      </div>
      <Button
        onClick={() => {
          router.push("/catalog");
        }}
        buttonText={"Все проекты"}
      />
    </>
  );
};
