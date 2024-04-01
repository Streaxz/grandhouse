"use client";
import React, {Children, ReactNode, useEffect, useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {EffectFade} from "swiper/modules";
import {ArrowIconLeft} from "@/app/icons/ArrowIconLeft";
import {ArrowIconRight} from "@/app/icons/ArrowIconRight";


export interface ICarouselProps {
		children: ReactNode;
		isPagination?: boolean;
		swiperEffect: string;
		tabletSlides?: number;
		desktopSlides?: number;
		mobileSlides?: number;
		spaceBetween? : number;
		isActive? : boolean
}
export const Carousel = ({children, isPagination, desktopSlides, tabletSlides, mobileSlides, isActive}: ICarouselProps) => {
		const swiperRef = useRef(null);
		const [activeIndex, setActiveIndex] = useState(0);
		const [swiperSlides, setSwiperSlides] = useState(desktopSlides || 1);
		const [spaceBetween, setSpaceBetween] = useState(desktopSlides ? desktopSlides - 1/ 3 : 36);

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

		useEffect(() => {
				const handleResize = () => {
						const width = window.outerWidth;
						if (width > 768) {
								setSwiperSlides(desktopSlides || 1);
								setSpaceBetween(desktopSlides ? 36 / (desktopSlides - 1) : 36)
						} else if (width <= 768 && width > 500) {
								setSwiperSlides(tabletSlides || 1);
								setSpaceBetween(tabletSlides ? 28 / (tabletSlides - 1): 28)
						} else if (width <= 500) {
								setSwiperSlides(mobileSlides || 1);
						}
				};
				window.addEventListener("resize", handleResize);
				handleResize(); // Вызываем один раз при монтировании, чтобы установить начальное количество фото
				return () => {
						window.removeEventListener("resize", handleResize);
				};
		}, []);


		return (
			<div style={{maxWidth:" 1440px", width: "112%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
					<div style={{display: "flex", justifyContent: "center"}}>
							<button onClick={goPrev} className={'leftArrow'}>
									<ArrowIconLeft />
							</button>
							<div style={{width: "90%"}}>
									<Swiper
										ref={swiperRef}
										spaceBetween={spaceBetween}
										slidesPerView={swiperSlides}
										pagination={false}
										effect={"slide"}
										className={'swiper'}
										modules={[EffectFade]}
										onSlideChange={(swiper) => {
												setActiveIndex(swiper.realIndex);
										}}
									>
											{
													Children.map(children, (child, index) =>
													<SwiperSlide
														className={activeIndex === index && isActive ? 'activeSlide' : ''}
														onClick={() => {isActive && setActiveIndex(index)}}
													>
															{child}
													</SwiperSlide>)
											}
									</Swiper>
							</div>
							<button onClick={goNext} className={'rightArrow'}>
									<ArrowIconRight />
							</button>
					</div>
					{ isPagination &&
					<div className="carouselButtons">
							{[0, 1, 2, 3].map((index) => (
								<div
									key={index}
									className={`carouselButton ${index === activeIndex ? 'activeButton' : ''} `}
									onClick={() => handlePaginationClick(index)}
								/>
							))}
							<div style={{paddingRight: "1vw"}} />
					</div>
					}
			</div>
		);
}