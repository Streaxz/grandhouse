"use client";
import "../../App.css"
import React, {useEffect, useState} from "react";
import {AutumnProject} from "@/app/components/Catalog/AutumnProject";
import ReactModal from "react-modal";
import {Button} from "@/app/components/Button/Button";
import {Modal} from "@/app/components/Modal/Modal";
import {Carousel} from "@/app/components/Carousel/Carousel";


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
                setSwiperSlides(2);
                setSpaceBetween(28);
            } else if (width <= 500) {
                setNumOfPhotos(4);
                setSwiperSlides(1);
                setSpaceBetween(10)
            } else {
                setSwiperSlides(2);
                setNumOfPhotos(7);
                setSpaceBetween(36);
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
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "36px"}}>
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
            <ReactModal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={{
                    content: {
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        width: "60vw",
                        height: "36vw",
                        borderRadius: "2vw",
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        overflow: 'hidden',
                        border: "none",
                        padding: "2vw"
                }}}
                contentLabel="Обратная связь"
            >
                <div className={'modalCloseButton'}>
                    <button onClick={closeModal}>
                        <img src={'/closeIcon.svg'} alt={'close'}/>
                    </button>
                </div>
                <Modal/>
            </ReactModal>
        </>
    )
}