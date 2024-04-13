"use client";
import styles from './project.module.css'
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import React from "react";
import {Quote} from "@/app/components/Quote/Quote";
import {Features} from "@/app/components/Features/Features";
import {RectangleFeature} from "@/app/components/RectangleFeature/RectangleFeature";
import {Carousel} from "@/app/components/Carousel/Carousel";
import {FeatureCardPicture} from "@/app/components/FeatureCardPicture/FeatureCardPicture";
import {TextContent} from "@/app/components/TextContent/TextContent";
import {OfferPdf} from "@/app/components/OfferPdf/OfferPdf";
import {Ideas} from "@/app/components/Ideas/Ideas";
import {Button} from "@/app/components/Button/Button";
import {Infographics} from "@/app/components/Infographics/Infographics";
import {ProjectHeader} from "@/app/components/ProjectHeader/ProjectHeader";
import {TextColumn} from "@/app/components/TextColumn/TextColumn";
import {SwitchContainer} from "@/app/components/SwitchContainer/SwitchContainer";
import {PhotoButton} from "@/app/components/PhotoButton/PhotoButton";
import {RoundFeaturesItem} from "@/app/components/RoundFeaturesItem/RoundFeaturesItem";
import {InfoTable} from "@/app/components/infoTable/infoTable";
import {MagazineCardLarge} from "@/app/components/Magazine/MagazineCardLarge/MagazineCardLarge";
import {Packages} from "@/app/components/Packages/Packages";
import {Announcement} from "@/app/components/Announcement/Announcement";
import {MortgageCalculator} from "@/app/MortgageCalculator/MortgageCalculator";
import {PriceOffer} from "@/app/components/PriceOffer/PriceOffer";
import {AutumnProject} from "@/app/components/Catalog/AutumnProject";

const ProjectPage = () => {

		return (
			<main className={styles.page}>
					<div className={styles.background} style={{
							background: 'url("/projectHouse.png")',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
					}}>
							<div style={{
									backgroundColor: "rgba(0, 0, 0, 0.2)",
									width: "100%",
									height: "100%",
									position: "absolute",
									top: 0,
									left: 0,
							}}/>
							<div className={styles.imageGradient}>
									<div className={styles.backgroundContainer}>
											<ProjectHeader
												rectangleColor={"#CC00FF"}
												mainText={"Заголовок"}
												textColor={"#FFF"}
											/>
											<div className={styles.infographicsContainer}>
													<Infographics/>
											</div>
									</div>
							</div>
					</div>
					<div className={styles.pageWrapper}>
							<div className={styles.pageContainer}>
									<Quote quoteText={
											'Каждый из нас понимает очевидную вещь: внедрение современных методик обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.'
									} src={
											'image.png'
									} text={
											'Имя Фамилия, должность'
									}
									/>
									<Carousel
										swiperEffect={'slider'}
										isPagination={true}
									>
											<FeatureCardPicture
												descriptionText={"Подпись"}
												src={'/projectHouse.png'}
											/>
											<FeatureCardPicture
												descriptionText={"Нажмите для просмотра"}
												src={'/projectHouse.png'}
											/>
									</Carousel>
									<TextColumn
										firstText={'«Грандхаус Лето» — первый проект нашей новой линейки, объединивший в себе, пожалуй, все ингредиенты идеального дома, от просторной террасы и второго света до свободной планировки и практичного конструктива.'}
									/>
									<OfferPdf
										text={'Смета и все подробности'}
										source={'test'}
									/>
									<div className="projectEllipse"></div>
							</div>

					</div>
					<div className={`${styles.pageWrapper} ${styles.lightBackground}`}>
							<div className={styles.pageContainer}>
									<TextBlock
										rectangleColor={"#CC00FF"}
										mainText={"Варианты планировки"}
										descriptionText={"Подзаголовок"}
										textColor={"#272B40"}
									/>
									<SwitchContainer/>
									<Carousel
										swiperEffect={'slider'}
										isPagination={true}
									>
											<FeatureCardPicture
												src={'/2d.png'}
												contain
											/>
											<FeatureCardPicture
												src={'/2d.png'}
												contain
											/>
									</Carousel>
									<TextContent
										color={"#272B40"}
										firstText={'Принимая во внимание показатели успешности, выбранный нами инновационный путь требует определения и уточнения экономической целесообразности принимаемых решений. Не следует, однако, забывать, что высокотехнологичная концепция общественного уклада способствует повышению качества первоочередных требований. Таким образом, сплочённость команды профессионалов представляет собой интересный эксперимент проверки вывода текущих активов.'}
										secondText={'Прежде всего, существующая теория требует от нас анализа переосмысления внешнеэкономических политик. Принимая во внимание показатели успешности, убеждённость некоторых оппонентов играет определяющее значение для системы массового участия.'}
									/>
									<PhotoButton
										backgroundSrc={"/clouds.jpeg"}
										buttonSrc={"/photoButton.png"}
										buttonText={"Обсудим ваши идеи?"}
										descriptionText={"Наши менеджеры всегда на связи - свяжитесь с нами и мы предложим решения конкретно под ваши задачи"}
									/>
							</div>
					</div>
					<div className={`${styles.pageWrapper} ${styles.yellowBackground}`}
							 style={{zIndex: 10, position: "relative"}}>
							<div className={styles.pageContainer}>
									<TextBlock
										rectangleColor={"#CC00FF"}
										mainText={"Интерьер"}
										descriptionText={'Подзаголовок'}
										textColor={"#272B40"}
									/>
									<Carousel
										isPagination={true}
										swiperEffect={'slide'}
									>
											<FeatureCardPicture
												src={'/interior.jpeg'}
											/>
											<FeatureCardPicture
												src={'/interior.jpeg'}
											/>
									</Carousel>
									<TextColumn
										color={"#272B40"}
										firstText={"«Грандхаус Лето» — первый проект нашей новой линейки, объединивший в себе, пожалуй, все ингредиенты идеального дома, от просторной террасы и второго света до свободной планировки и практичного конструктива."}
									/>
									<Ideas
										text={'Заинтересовал проект?'}
									/>
							</div>
					</div>
					<div className={`${styles.pageWrapper} ${styles.darkBackground}`}>
							<div className={styles.pageContainer}>
									<TextBlock
										rectangleColor={"#CC00FF"}
										textColor={"#FFF"}
										mainText={"История проекта"}
										descriptionText={"Вводка про отзывы и довольных клиентов"}
									/>
									<Features>
											<RoundFeaturesItem
												src={"/company.jpeg"}
											/>
											<RoundFeaturesItem
												src={"/wood.jpeg"}
											/>
											<RoundFeaturesItem
												src={"/autumn.jpeg"}
											/>
									</Features>
									<TextContent
										firstText={'Принимая во внимание показатели успешности, выбранный нами инновационный путь требует определения и уточнения экономической целесообразности принимаемых решений. Не следует, однако, забывать, что высокотехнологичная концепция общественного уклада способствует повышению качества первоочередных требований. Таким образом, сплочённость команды профессионалов представляет собой интересный эксперимент проверки вывода текущих активов.'}
										secondText={'Прежде всего, существующая теория требует от нас анализа переосмысления внешнеэкономических политик. Принимая во внимание показатели успешности, убеждённость некоторых оппонентов играет определяющее значение для системы массового участия.'}
									/>
									<Quote quoteText={
											'Каждый из нас понимает очевидную вещь: внедрение современных методик обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.'
									} src={
											'image.png'
									} text={
											'Имя Фамилия, должность'
									}
									/>
									<div className={styles.darkEllipse}></div>
							</div>
					</div>
					<div className={`${styles.pageWrapper} ${styles.diagonalDivide}`}>
							<div className={styles.pageContainer}>
									<TextBlock
										rectangleColor={"#CC00FF"}
										mainText={"Наружняя отделка"}
										descriptionText={'Подзаголовок'}
										textColor={"#272B40"}
									/>
									<Features>
											<RectangleFeature
												textColor={'#272B40'}
												src={'/image.png'}
												headerText={"Специальный"}
												descriptionText={'Основной текст'}
											/>
											<RectangleFeature
												textColor={'#272B40'}
												src={'/image.png'}
												headerText={"Специальный"}
												descriptionText={'Основной текст'}
											/>
											<RectangleFeature
												textColor={'#272B40'}
												src={'/image.png'}
												headerText={"Специальный"}
												descriptionText={'Основной текст'}
											/>
											<RectangleFeature
												textColor={'#272B40'}
												src={'/image.png'}
												headerText={"Специальный"}
												descriptionText={'Основной текст'}
											/>
									</Features>
							</div>
					</div>
					<div className={`${styles.pageWrapper} ${styles.greyBackground}`}>
							<div className={styles.pageContainer}>
									<TextBlock
										rectangleColor={"#CC00FF"}
										textColor={"#272B40"}
										mainText={"Конструктивные решения"}
										descriptionText={"подзаголовок"}
									/>
									<Carousel
										isPagination={true}
										swiperEffect={'slide'}
									>
											<FeatureCardPicture
												src={'/sideHouse.png'}
												contain
											/>
											<FeatureCardPicture
												src={'/sideHouse.png'}
												contain
											/>
									</Carousel>
									<div className={'doubleItem'}>
											<div className={'accentText'}>
													<h3>Индивидуальное проектирование</h3>
													<p>Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей
															Западной России.Портфолио Грандхауса включает дома и объекты различной сложности,
															построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной
															сложности, построенные по всей Западной</p>
											</div>
											<div className={'accentText'}>
													<h3>Индивидуальное проектирование</h3>
													<p>Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей
															Западной России.Портфолио Грандхауса включает дома и объекты различной сложности,
															построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной
															сложности, построенные по всей Западной</p>
											</div>
									</div>
									<div className={'doubleItem'}>
											<div className={'accentText'}>
													<h3>Индивидуальное проектирование</h3>
													<p>Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей
															Западной России.Портфолио Грандхауса включает дома и объекты различной сложности,
															построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной
															сложности, построенные по всей Западной</p>
											</div>
											<div className={'accentText'}>
													<h3>Индивидуальное проектирование</h3>
													<p>Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей
															Западной России.Портфолио Грандхауса включает дома и объекты различной сложности,
															построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной
															сложности, построенные по всей Западной</p>
											</div>
									</div>
									<InfoTable/>
							</div>
					</div>
					<div className={`${styles.pageWrapper} ${styles.darkBackground}`}>
							<div className={styles.pageContainer}>
									<MagazineCardLarge/>
							</div>
					</div>
					<div className={`${styles.pageWrapper} ${styles.darkBackground}`}>
							<div className={styles.pageContainer}>
									<MagazineCardLarge/>
							</div>
					</div>
					<div className={`${styles.pageWrapper} ${styles.darkBackground}`} style={{zIndex: 5}}>
							<div className={styles.pageContainer}>
									<TextBlock
										rectangleColor={"#CC00FF"}
										textColor={"#2"}
										mainText={"Фотографии построенного проекта"}
										descriptionText={"Вводка про отзывы и довольных клиентов"}
									/>
									<Carousel
										isPagination={true}
										swiperEffect={'slide'}
									>
											<FeatureCardPicture
												src={'/interior.jpeg'}
											/>
											<FeatureCardPicture
												src={'/interior.jpeg'}
											/>
									</Carousel>
									<TextColumn
										firstText={'«Грандхаус Лето» — первый проект нашей новой линейки, объединивший в себе, пожалуй, все ингредиенты идеального дома, от просторной террасы и второго света до свободной планировки и практичного конструктива.'}
									/>
							</div>
					</div>
					<div className={`${styles.pageWrapper} ${styles.lighGrayBackground}`}>
							<div className={styles.pageContainer}>
									<TextBlock
										rectangleColor={"#CC00FF"}
										textColor={"#272B40"}
										mainText={"Цены"}
										descriptionText={"Базовая планировка «Грандхаус Лето» включает большую 30-метровую гостиную-столовую, 12-метровую кухню, три спальни, две ванные комнаты и террасу."}
									/>
									<Packages/>
									<Announcement/>
									<OfferPdf
										text={'Смета и все подробности'}
										source={''}
									/>
									<div className={styles.packagesEllipse}/>
							</div>
					</div>
					<div className={`${styles.backgroundMortgage} ${styles.pageWrapper}`} style={{
							background: 'url("/officeWorker.jpeg")',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
					}}>
							<div style={{
									background: "linear-gradient(0deg, rgba(0, 192, 100, 0.9), rgba(0, 192, 100, 0.9))",
									width: "100%",
									height: "100%",
									position: "absolute",
									top: 0,
									left: 0,
							}}/>
							<div className={styles.pageContainer}>
									<div className={styles.mortgageBackgroundContainer}>
											<TextBlock
												rectangleColor={"#FFF"}
												mainText={"Калькулятор ипотеки"}
												descriptionText={'Поздаголовок'}
												textColor={"#FFF"}
											/>
											<MortgageCalculator/>
											<PriceOffer/>
									</div>
							</div>
					</div>
					<div className={`${styles.backgroundMortgage} ${styles.pageWrapper}`} style={{
							background: 'url("/nature.jpeg")',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
					}}>
							<div style={{
									background: "linear-gradient(180deg, rgba(0, 39, 4, 0.83) 0%, rgba(0, 180, 18, 0.60) 100%)",
									width: "100%",
									height: "100%",
									position: "absolute",
									top: 0,
									left: 0,
							}}/>
							<div className={styles.pageContainer}>
									<h1 className={'italicText'}>В вашем доме всегда будет Лето</h1>
									<Features>
											<RoundFeaturesItem
												src={"/company.jpeg"}
											/>
											<RoundFeaturesItem
												src={"/wood.jpeg"}
											/>
											<RoundFeaturesItem
												src={"/autumn.jpeg"}
											/>
									</Features>
									<div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "60px"}}>
											<p style={{textAlign: "center"}}>
													Обратная связь от 500 реальных клиентов за 8 лет работы — та прочная основа, на которой
													был создан этот серийный проект.</p>
											<p style={{textAlign: "center"}}>Все конструктивные и планировочные особенности здесь
													обоснованы и рассчитаны, материалы выбраны исходя из их эстетических и функциональных
													свойств, возможность любой индивидуальной доводки заложена изначально.
													«Грандхаус Лето» создан профессиональной командой для тех клиентов, кто серьезно подходит
													к делу строительства своего будущего дома, в котором планирует прожить многие годы</p>
											<p style={{textAlign: "center"}}>Хотите получить за свои деньги доступный, продуманный
													одновременно красивый и современный проект? «Грандхаус Лето» — то, что вы ищете.</p>
									</div>
									<Button onClick={() => {
									}} buttonText={'Закажите звонок'}/>
							</div>
					</div>
					<div className={`${styles.pageWrapper}`}>
							<div className={styles.pageContainer}>
									<TextBlock
										rectangleColor={"#CC00FF"}
										textColor={"#272B40"}
										mainText={"Другии проекты серии «Времена года» или другие проекты компании"}
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
									<Button onClick={() => {}} buttonText={'Все проекты (240)'}/>
							</div>
					</div>
			</main>
		)
}

export default ProjectPage;