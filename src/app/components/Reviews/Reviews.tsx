'use client';
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import React from "react";
import {ProjectCard} from "@/app/components/ProjectCart/ProjectCard";
import {Carousel} from "@/app/components/Carousel/Carousel";
import {Button} from "@/app/components/Button/Button";

export const Reviews = () => {
		return (
			<div className={'reviewsContainer'}>
					<div className={'reviewsWrapper'}>
							<TextBlock
								rectangleColor={"#C0F"}
								textColor={"#272B40"}
								mainText={"Отзывы на 5 звезд"}
								descriptionText={"Вводка про отзывы и довольных клиентов"}
							/>
							<Carousel swiperEffect={'slide'}>
									<ProjectCard/>
							</Carousel>
							<Button
								onClick={() => {
								}}
								buttonText={"Читать все отзывы"}
							/>
					</div>
			</div>
		)
}