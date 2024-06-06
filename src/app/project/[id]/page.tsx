"use client";
import styles from '../project.module.css'
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import React, {useEffect} from "react";
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
import {MortgageCalculator} from "@/app/components/MortgageCalculator/MortgageCalculator";
import {PriceOffer} from "@/app/components/PriceOffer/PriceOffer";
import {CatalogItem} from "@/app/components/Catalog/CatalogItem";
import {useProject} from "@/app/hooks/useProject";
import {PHOTO_TYPE} from "@/app/types/IPhoto";


const ProjectPage = ({params}: {params: { id: string}}) => {

	const {project, getProject} = useProject(params.id);

	useEffect(() => {
		const fetchData = async () => {
			await getProject();
		}

		if (params && !project) {
			fetchData();
		}
	}, [getProject, params, project]);

	console.log(project);


	return (
		<main className={styles.page}>
			<div className={styles.background} style={{
				background: `url(${project?.photos?.filter((photo) => photo.type === PHOTO_TYPE.GENERAL)[0].imageUrl}`,
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
							mainText={project?.title!}
							textColor={"#FFF"}
							series={project?.series?.comment}
						/>
						<div className={styles.infographicsContainer}>
							<Infographics
								area={project?.area}
								size={project?.size}
								bedroomsCount={project?.bedroomsCount}
								bathroomCount={project?.bathroomCount}
								price={project?.price}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.pageWrapper}>
				<div className={styles.pageContainer}>
					{project?.mainQuoteText && project.mainQuoteAuthor &&
              <Quote
                  quoteText={project.mainQuoteText}
                  author={project.mainQuoteAuthor}
              />
					}
					{(project?.photos?.filter((photo) => photo.type === PHOTO_TYPE.GENERAL).length !== 0) &&
              <Carousel
                  swiperEffect={'slider'}
                  desktopSlides={1}
                  isPagination={true}
              >
								{(project?.photos?.filter((photo) => photo.type === PHOTO_TYPE.GENERAL).map((photo) => (
									<FeatureCardPicture
										key={photo.id}
										descriptionText={"Подпись"}
										src={photo.imageUrl}
									/>
								)))
								}
              </Carousel>
					}
					<TextColumn
						firstText={project?.mainText || ''}
					/>
					{project?.estimateLink &&
              <OfferPdf
                  text={'Смета и все подробности'}
                  source={project.estimateLink}
              />
					}
					<div className="projectEllipse"></div>
				</div>

			</div>
			<div className={`${styles.pageWrapper} ${styles.lightBackground}`} style={{zIndex: 10}}>
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
					{project?.layoutText &&
              <TextContent
                  color={"#272B40"}
                  text={project.layoutText}
              />
					}
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
					{project?.photos?.filter((photo) => photo.type === PHOTO_TYPE.INTERIOR).length !== 0 &&
              <Carousel
                  isPagination={true}
                  swiperEffect={'slide'}
              >
								{project?.photos?.filter((photo) => photo.type === PHOTO_TYPE.INTERIOR).map((photo) => (
									<FeatureCardPicture
										key={photo.id}
										src={photo.imageUrl}
									/>
								))}
              </Carousel>
					}
					{project?.interiorText &&
              <TextColumn
                  color={"#272B40"}
                  firstText={project.interiorText}
              />
					}
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
					{project?.historyText &&
              <TextContent
                  text={project?.historyText}
              />
					}
					{project?.historyQuoteText && project.historyQuoteAuthor &&
              <Quote
                  quoteText={project.historyQuoteText}
                  author={project.historyQuoteAuthor}
              />
					}
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
					{(project?.materials && project?.materials?.length > 0) &&
              <Features>
								{project.materials.map((material) => (
									<RectangleFeature
										key={`material-${material.id}`}
										textColor={'#272B40'}
										src={material.imageUrl}
										headerText={material.title}
										descriptionText={material.description}
									/>
								))}
              </Features>
					}
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
					{project?.photos?.filter((photo) => photo.type === PHOTO_TYPE.EXTERIOR).length !== 0 &&
              <Carousel
                  isPagination={true}
                  swiperEffect={'slide'}
              >
								{project?.photos?.filter((photo) => photo.type === PHOTO_TYPE.EXTERIOR).map((photo) => (
									<FeatureCardPicture
										key={photo.id}
										src={photo.imageUrl}
									/>
								))}
              </Carousel>
					}
					{project?.exteriorDescriptions && project?.exteriorDescriptions?.length > 0 &&
              <div className={'doubleItem'}>
								{project.exteriorDescriptions.map((description) => (
									<div
										key={`description-${description.id}`}
										className={'accentText'}
									>
										<h3>{description.title}</h3>
										<p>{description.description}</p>
									</div>
								))}
              </div>
					}
					{project?.information && project?.information?.length > 0 &&
              <InfoTable
                  information={project.information}
              />
					}
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
					{project?.photos?.filter((photo) => photo.type === PHOTO_TYPE.COMPLETE).length !== 0 &&
              <Carousel
                  isPagination={true}
                  swiperEffect={'slide'}
              >
								{project?.photos?.filter((photo) => photo.type === PHOTO_TYPE.COMPLETE).map((photo) => (
									<FeatureCardPicture
										key={photo.id}
										src={photo.imageUrl}
									/>
								))}
              </Carousel>
					}
					{
						project?.completeText &&
              <TextColumn
                  firstText={project.completeText}
              />
					}
				</div>
			</div>
			{project?.pricePackages && project.pricePackages.length > 0 && !project.isArchive &&
          <div className={`${styles.pageWrapper} ${styles.lighGrayBackground}`}>
              <div className={styles.pageContainer}>
                  <TextBlock
                      rectangleColor={"#CC00FF"}
                      textColor={"#272B40"}
                      mainText={"Цены"}
                      descriptionText={"Базовая планировка «Грандхаус Лето» включает большую 30-метровую гостиную-столовую, 12-метровую кухню, три спальни, две ванные комнаты и террасу."}
                  />
                  <Packages
                      prices={project.pricePackages}
                  />
                  <Announcement/>
								{project?.estimateLink &&
                    <OfferPdf
                        text={'Смета и все подробности'}
                        source={project.estimateLink}
                    />
								}
                  <div className={styles.packagesEllipse}/>
              </div>
          </div>
			}
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
			{project?.photos?.filter((photo) => photo.type === PHOTO_TYPE.POST_SCRIPTUM).length && project.postScriptumText &&
          <div className={`${styles.backgroundMortgage} ${styles.pageWrapper}`} style={{
						background: `url(${project.photos?.filter((photo) => photo.type === PHOTO_TYPE.POST_SCRIPTUM)[0].imageUrl})`,
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
                  <h1 className={'italicText'}>{project.postScriptumText}</h1>
								{project.photos?.filter((photo) => photo.type === PHOTO_TYPE.POST_SCRIPTUM).length !== 0 &&
                    <Features>
											{project.photos?.filter((photo) => photo.type === PHOTO_TYPE.POST_SCRIPTUM).map((photo) => (
												<RoundFeaturesItem
													key={`photo-${photo.id}`}
													src={photo.imageUrl}
												/>
											))
											}
                    </Features>
								}
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
                          одновременно красивый и современный проект? «{project.series?.comment}» — то, что вы ищете.</p>
											<br/>
                  </div>
              </div>
              <Button onClick={() => {
							}} buttonText={'Закажите звонок'}/>
          </div>
			}
			<div className={`${styles.pageWrapper}`}>
				<div className={styles.pageContainer}>
					<TextBlock
						rectangleColor={"#CC00FF"}
						textColor={"#272B40"}
						mainText={`Другии проекты серии «${project?.series?.comment}» или другие проекты компании`}
					/>
					<Carousel
						swiperEffect={'slider'}
						desktopSlides={2}
						tabletSlides={2}
						mobileSlides={1}
						spaceBetween={36}
					>
						<CatalogItem/>
						<CatalogItem/>
					</Carousel>
					<Button onClick={() => {
					}} buttonText={'Все проекты (240)'}/>
				</div>
			</div>
		</main>
	)
}
export default ProjectPage;