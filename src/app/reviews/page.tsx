"use client";
import styles from './reviews.module.css'
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import React, {useState} from "react";
import {Carousel} from "@/app/components/Carousel/Carousel";
import {Ideas} from "@/app/components/Ideas/Ideas";
import {Button} from "@/app/components/Button/Button";
import {ReviewCardSmall} from "@/app/components/ReviewCardSmall/ReviewCardSmall";
import {FeatureCardSmallDarkLabel} from "@/app/components/FeatureCardSmallDarkLabel/FeatureCardSmallDarkLabel";
import {ReviewCardLarge} from "@/app/components/ReviewCardLarge/ReviewCardLarge";
import {MagazineCardLarge} from "@/app/components/Magazine/MagazineCardLarge/MagazineCardLarge";
import {AutumnProject} from "@/app/components/Catalog/AutumnProject";

const ReviewsPage = () => {
		const [isOpen, setIsOpen] = useState<boolean>(false);

		const handleClick = () => {
				setIsOpen(!isOpen);
		}

		return (
			<main className={styles.page}>
					<div className={styles.pageWrapper}>
							<div className={styles.pageContainer}>
									<TextBlock
										rectangleColor={"#CC00FF"}
										mainText={"Работы и отзывы"}
										descriptionText={"Подзаголовок"}
										textColor={"#FFF"}
									/>
							</div>
					</div>
					<div className={styles.map}
							 style={
									 isOpen ?
										 {
												 position: "relative",
												 background: "url(/yandexMap.png)",
												 backgroundSize: "cover",
												 backgroundPosition: "center",
												 backgroundRepeat: "no-repeat",
										 } : {
												 height: "178px",
												 position: "relative",
												 background: "url(/yandexMap.png)",
												 backgroundSize: "cover",
												 backgroundPosition: "center",
												 backgroundRepeat: "no-repeat",
										 }}
					>
							<div
								className={styles.point}
								style={{}}/>
							<div
								className={styles.mapGradient}
								style={!isOpen ? {} : {display: "none"}}
							>
									<Button
										onClick={handleClick}
										buttonText={"Открыть карту"}
									/>
							</div>

							<div
								className={styles.folder}
								style={isOpen ? {} : {display: "none"}}
								onClick={handleClick}
							>
									<img
										src={'/sliderArrowRight.svg'}
										alt={'Arrow'}
										style={{rotate: "-90deg"}}
									/>
							</div>
					</div>
					<div className={`${styles.pageWrapper}`}>
							<div className={styles.pageContainer}>
									<ReviewCardLarge/>
									<div className={'doubleItem'}>
											<FeatureCardSmallDarkLabel
												headerText={"Заголовок"}
												descriptionText={"Подпись"}
											/>
											<FeatureCardSmallDarkLabel
												headerText={"Заголовок"}
												descriptionText={"Подпись"}
											/>
									</div>
									<div className={'doubleItem'}>
											<div className={'doubleItemContainer'}>
													<ReviewCardSmall/>
											</div>
											<div className={'doubleItemContainer'}>
													<ReviewCardSmall/>
											</div>
									</div>
									<Button
										onClick={() => {}}
										buttonText={'Загрузить все'}
									/>
									<Ideas/>
							</div>
					</div>
					<div className={`${styles.pageWrapper} ${styles.darkBackground}`} style={{zIndex: 10}}>
							<div className={styles.pageContainer}>
									<MagazineCardLarge/>
							</div>
					</div>
					<div className={`${styles.pageWrapper}`}>
							<div className={styles.pageContainer}>
									<TextBlock
										rectangleColor={"#CC00FF"}
										textColor={"#FFF"}
										mainText={"Наши проекты"}
										descriptionText={"Вводка про философию компании. Мы строим по готовым и индивидуальным проектам - дома и любые другие строения под ключ — из камня, рубленного бревна, профилированного и клееного бруса."}
									/>
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
									<div className={styles.ellipse}/>
							</div>
					</div>
			</main>
		)
}

export default ReviewsPage;