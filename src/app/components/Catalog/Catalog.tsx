"use client";
import "../../App.css"
import React, {useEffect, useState} from "react";
import {AutumnProject} from "@/app/components/Catalog/AutumnProject";
import {Button} from "@/app/components/Button/Button";
import {AmoCrmModal} from "@/app/components/Modal/AmoCrmModal";
import {Carousel} from "@/app/components/Carousel/Carousel";
import {Modal} from "antd";

export const Catalog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [numOfPhotos, setNumOfPhotos] = useState(6);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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

  const roundPhotos = Array.from({length: numOfPhotos}, (_, index) => (
    <div
      key={index}
      className="roundPhoto"
      style={{backgroundImage: `url(/autumn.png)`}}
    ></div>
  ));

  return (
    <>
      <div className='catalogContainer'>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "36px"
        }}>
          <img src={`/logo_catalog.svg`} alt={'logo'}
               className={"logoCatalog"}></img>
          <p>Вводка о каталоге компании</p>
        </div>
      </div>
      <Carousel
        swiperEffect={'slider'}
        desktopSlides={2}
        tabletSlides={2}
        mobileSlides={1}
        spaceBetween={36}
      >
        <AutumnProject/>
        <AutumnProject/>
      </Carousel>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%"
        }}
      >
        {roundPhotos}
      </div>
      <Button
        onClick={openModal}
        buttonText={"Все проекты (240)"}
      />
      <Modal
        open={isOpen}
        onCancel={closeModal}
        width={"80%"}
        style={{
          top: `${typeof window !== 'undefined' && window.scrollY + 50}px`,
        }}

        footer={null}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            top: 0,
            flexDirection: "column",
          }}
        >
          <AmoCrmModal
            isModal={true}
            closeModal={closeModal}/>
        </div>
      </Modal>
    </>
  )
}