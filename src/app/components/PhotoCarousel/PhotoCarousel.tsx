"use client";
import React, {useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {EffectFade, Navigation} from "swiper/modules";
import {Photo} from "@/app/components/PhotoCarousel/Photo";
import {ArrowIconLeft} from "@/app/icons/ArrowIconLeft";
import {ArrowIconRight} from "@/app/icons/ArrowIconRight";

export const PhotoCarousel = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

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

    const handlePaginationClick = (index: number) => {
        //@ts-ignore
        if (swiperRef.current && swiperRef.current.swiper) {
            //@ts-ignore
            swiperRef.current.swiper.slideTo(index);
            setActiveIndex(index);
        }
    };

    return (
        <div className={"flex flex-col justify-center w-12/12"}>
                <div className={"inline-flex justify-between"}>
                    <button onClick={goPrev} className={'leftArrow'}>
                        <ArrowIconLeft />
                    </button>
                    <div style={{width: "90vw"}} className={"photo"}>
                        <Swiper
                            ref={swiperRef}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={false}
                            effect={"fade"}
                            modules={[EffectFade]}
                            onSlideChange={(swiper) => {
                                setActiveIndex(swiper.realIndex);
                            }}
                        >
                            <SwiperSlide>
                                <Photo />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Photo/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Photo />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Photo/>
                            </SwiperSlide>
                            {/* Add more slides here */}
                        </Swiper>

                    </div>
                    <button onClick={goNext} className={'rightArrow'}>
                        <ArrowIconRight />
                    </button>
                </div>
            <div className="carouselButtons">
                {[0, 1, 2, 3].map((index) => (
                    <div
                        key={index}
                        className={`carouselButton ${index === activeIndex ? 'activeButton' : ''} `}
                        onClick={() => handlePaginationClick(index)}
                    />
                ))}
                <div className="pr-4" />
            </div>
        </div>
    );
}