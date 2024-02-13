"use client";
import "../../App.css"
import {ArrowIconLeft} from "../../icons/ArrowIconLeft";
import React, {useEffect, useRef, useState} from "react";
import {ArrowIconRight} from "../../icons/ArrowIconRight";
import {Swiper, SwiperSlide} from "swiper/react";
import {WinterProject} from "@/app/components/Catalog/WinterProject";
import {AutumnProject} from "@/app/components/Catalog/AutumnProject";
export const Catalog = () => {
    const swiperRef = useRef(null);
    const goNext = () => {
        //@ts-ignore
        if (swiperRef.current && swiperRef.current.swiper) {
            //@ts-ignore
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        //@ts-ignore
        if (swiperRef.current && swiperRef.current.swiper) {
            //@ts-ignore
            swiperRef.current.swiper.slidePrev();
        }
    };

    const [numOfPhotos, setNumOfPhotos] = useState(6);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 768 && width > 366) {
                setNumOfPhotos(6);
            } else if (width <= 366) {
                setNumOfPhotos(3);
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

    const roundPhotos = Array.from({ length: numOfPhotos }, (_, index) => (
        <div
            key={index}
            className="roundPhoto"
            style={{ backgroundImage: `url(/autumn.png)` }}
        ></div>
    ));

    return (
        <>
            <div className='catalogContainer'>
                <div className={'flex flex-col justify-center items-center'}>
                    <img src={`/logo_catalog.svg`}
                         className={"logoCatalog"}></img>
                    <p className={'logoCatalogDescription'}>Вводка о каталоге компании до 150 знаков.</p>
                </div>
            </div>
            <div className={"flex flex-col justify-center w-12/12 z-50"}>
                <div className={"inline-flex justify-between"}>
                    <button onClick={goPrev} className={'leftArrow'}>
                        <ArrowIconLeft />
                    </button>
                    <div style={{width: "90vw"}} className={"photo"}>
                        <Swiper
                            ref={swiperRef}
                            spaceBetween={"-10vw"}
                            slidesPerView={2}
                            pagination={false}
                        >
                            <SwiperSlide>
                                <AutumnProject />
                            </SwiperSlide>
                            <SwiperSlide>
                                <WinterProject />
                            </SwiperSlide>
                            <SwiperSlide>
                                <AutumnProject/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <WinterProject/>
                            </SwiperSlide>
                            {/* Add more slides here */}
                        </Swiper>
                    </div>
                    <button onClick={goNext} className={'rightArrow'}>
                        <ArrowIconRight />
                    </button>
                </div>
            </div>

            <div
                style={{
                    display: "inline-flex",
                    paddingTop: "4vw",
                    justifyContent: "space-evenly",
                    width: "83vw"
                }}
            >
                {roundPhotos}
            </div>
                    <button className='projectButton'>
                            <span className={'projectButtonText'}>Все проекты (240)</span>
                    </button>
        </>
    )
}