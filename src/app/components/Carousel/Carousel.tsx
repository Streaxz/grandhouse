"use client";
import React, {Children, ReactNode, useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {EffectFade} from "swiper/modules";
import {ArrowIconLeft} from "@/app/icons/ArrowIconLeft";
import {ArrowIconRight} from "@/app/icons/ArrowIconRight";


export interface ICarouselProps {
		children: ReactNode;
		isPagination?: boolean;
		swiperEffect: string;
}
export const Carousel = ({children, isPagination}: ICarouselProps) => {
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
			<div style={{maxWidth:" 1440px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
					<div style={{display: "flex", justifyContent:"space-between"}}>
							<button onClick={goPrev} className={'leftArrow'}>
									<ArrowIconLeft />
							</button>
							<div style={{width: "90%"}}>
									<Swiper
										ref={swiperRef}
										spaceBetween={50}
										slidesPerView={1}
										pagination={false}
										effect={"slide"}
										modules={[EffectFade]}
										onSlideChange={(swiper) => {
												setActiveIndex(swiper.realIndex);
										}}
									>
											{
													Children.map(children, child =>
													<SwiperSlide>
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