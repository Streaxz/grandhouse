"use client";
import React, { Children, ReactNode, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { EffectCoverflow, EffectFade } from "swiper/modules";
import { ArrowIconLeft } from "@/app/icons/ArrowIconLeft";
import { ArrowIconRight } from "@/app/icons/ArrowIconRight";

export interface ICarouselProps {
  children: ReactNode;
  isPagination?: boolean;
}
export const CarouselAnimated = ({
  children,
  isPagination,
}: ICarouselProps) => {
  const swiperRef = useRef(null) as any;
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperSlides, setSwiperSlides] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(-322.5);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handlePaginationClick = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.outerWidth;
      if (width > 768) {
        setSwiperSlides(3);
        setSpaceBetween(-322.5);
      } else if (width <= 768 && width > 500) {
        setSwiperSlides(3);
        setSpaceBetween(-267);
      } else if (width <= 500) {
        setSwiperSlides(1);
        setSpaceBetween(20);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Вызываем один раз при монтировании, чтобы установить начальное количество фото
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: " 1440px",
        width: "112%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={goPrev} className={"leftArrow"}>
          <ArrowIconLeft />
        </button>
        <div style={{ width: "90%", overflow: "visible" }}>
          <Swiper
            ref={swiperRef}
            loop={swiperSlides !== 1}
            coverflowEffect={{
              rotate: 0,
              depth: 300,
              scale: 0.8,
            }}
            slidesPerView={swiperSlides}
            spaceBetween={spaceBetween}
            pagination={false}
            effect={swiperSlides === 1 ? "slider" : "coverflow"}
            className={"swiperAnimated"}
            modules={[EffectFade, EffectCoverflow]}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
          >
            {Children.map(children, (child) => (
              <SwiperSlide>{child}</SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button onClick={goNext} className={"rightArrow"}>
          <ArrowIconRight />
        </button>
      </div>
      {isPagination && (
        <div className="carouselButtons">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`carouselButton ${index === activeIndex ? "activeButton" : ""} `}
              onClick={() => handlePaginationClick(index)}
            />
          ))}
          <div style={{ paddingRight: "1vw" }} />
        </div>
      )}
    </div>
  );
};
