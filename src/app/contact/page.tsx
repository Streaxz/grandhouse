"use client";
import styles from './company.module.css'
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import React from "react";
import {AccentCard} from "@/app/components/AccentCard/AccentCard";
import {Quote} from "@/app/components/Quote/Quote";
import {Features} from "@/app/components/Features/Features";
import {RectangleFeature} from "@/app/components/RectangleFeature/RectangleFeature";
import {Carousel} from "@/app/components/Carousel/Carousel";
import {FeatureCardPicture} from "@/app/components/FeatureCardPicture/FeatureCardPicture";
import {TextContent} from "@/app/components/TextContent/TextContent";
import {OfferPdf} from "@/app/components/OfferPdf/OfferPdf";
import {Ideas} from "@/app/components/Ideas/Ideas";
import {Button} from "@/app/components/Button/Button";
import {ReviewCardSmall} from "@/app/components/ReviewCardSmall/ReviewCardSmall";
import {Modal} from "@/app/components/Modal/Modal";
import {RoundFeaturesItem} from "@/app/components/RoundFeaturesItem/RoundFeaturesItem";

const ContactPage = () => {

		return (
			<main className={styles.page}>
					<div className={styles.pageWrapper}>
							<div className={styles.pageContainer}>
									<TextBlock
										rectangleColor={"#CC00FF"}
										mainText={"Страница заявки"}
										descriptionText={"Вводка про философию компании. Мы строим по готовым и индивидуальным проектам - дома и любые другие строения под ключ — из камня, рубленного бревна, профилированного и клееного бруса."}
										textColor={"#FFF"}
									/>
									<Modal></Modal>
									<TextBlock
										rectangleColor={"#CC00FF"}
										mainText={"О компании кратко"}
										descriptionText={"Принимая во внимание показатели успешности, выбранный нами инновационный путь требует определения и уточнения экономической целесообразности принимаемых решений. Не следует, однако, забывать, что высокотехнологичная концепция общественного уклада способствует повышению качества первоочередных требований. Таким образом, сплочённость команды профессионалов представляет собой интересный эксперимент проверки вывода текущих активов."}
										textColor={"#FFF"}
									/>
									<Features>
											<RoundFeaturesItem
												headerText={"Заголовок элемента"}
												descriptionText={"Подзаголовок элемента"}
												src={"/company.jpeg"}
											/>
											<RoundFeaturesItem
												headerText={"Заголовок Элемента"}
												descriptionText={"Подзаголовок элемента"}
												src={"/wood.jpeg"}
											/>
											<RoundFeaturesItem
												headerText={"Заголовок Элемента"}
												descriptionText={"Подзаголовок элемента"}
												src={"/autumn.jpeg"}
											/>
									</Features>
									<Button
										onClick={() => {}}
										buttonText={'Подробнее о компании'}
									/>
							</div>
							<div className="philosophyEllipse"></div>
					</div>
			</main>
		)
}

export default ContactPage;