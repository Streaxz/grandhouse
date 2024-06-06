"use client";
import styles from './catalog.module.css'
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import React, {useEffect} from "react";
import {Ideas} from "@/app/components/Ideas/Ideas";
import {Button} from "@/app/components/Button/Button";
import {FeatureCardSmallDarkLabel} from "@/app/components/FeatureCardSmallDarkLabel/FeatureCardSmallDarkLabel";
import {MagazineCardLarge} from "@/app/components/Magazine/MagazineCardLarge/MagazineCardLarge";
import {CatalogItem} from "@/app/components/Catalog/CatalogItem";
import {Filters} from "@/app/components/Filters/Filters";
import {Sberbank} from "@/app/components/Sberbank/Sberbank";
import {PhotoButton} from "@/app/components/PhotoButton/PhotoButton";
import {useProject} from "@/app/hooks/useProject";
import {useRouter} from "next/navigation";

const CatalogPage = () => {
	const {getProjects, projects} = useProject();
	const router = useRouter()

	useEffect(() => {
		const fetchData = async () => {
			await getProjects();
		}

		if (!projects) {
			fetchData();
		}

	}, [projects])

	console.log(projects);
		return (
			<main className={styles.page}>
					<div className={styles.pageWrapper}>
							<div className={styles.pageContainer}>
									<TextBlock
										rectangleColor={"#CC00FF"}
										mainText={"Каталог проектов"}
										descriptionText={"Подзаголовок"}
										textColor={"#FFF"}
									/>
									<Filters/>
									<div className={styles.seriesContainer}>
										{projects?.slice(0,4).map((project, index) => (
											<a
												onClick={() => {router.push(`/project/${project.id}`)}}
												key={index}
												className={styles.flexItem}>
												<CatalogItem project={project} />
											</a>
										))}
									</div>
									<Sberbank/>
									<div className={styles.catalogContainer}>
										{projects?.slice(4).map((project, index) => (
											<div key={index} className={styles.flexItem}>
												<CatalogItem project={project} />
											</div>
										))}
									</div>
									<Button
										onClick={() => {}}
										buttonText={'Загрузить еще'}
									/>
									<Ideas
										text={'У нас и другие проекты'}
									/>
							</div>
					</div>
					<div className={`${styles.pageWrapper} ${styles.darkBackground}`}>
							<div className={styles.pageContainer}>
									<MagazineCardLarge/>
							</div>
					</div>
					<div className={`${styles.pageWrapper}`}>
							<div className={styles.pageContainer}>
									<TextBlock
										rectangleColor={'#CC00FF'}
										textColor={'#FFF'}
										mainText={"Отзывы"}
										descriptionText={"Вводка про отзывы и довольных клиентов"}
									/>
									<PhotoButton
										backgroundSrc={"/clouds.jpeg"}
										buttonSrc={"/photoButton.png"}
										buttonText={"Обсудим ваши идеи?"}
										descriptionText={"Наши менеджеры всегда на связи - свяжитесь с нами и мы предложим решения конкретно под ваши задачи"}
									/>
									<div className={'doubleItem'}>
													<FeatureCardSmallDarkLabel
														headerText={"House for a family"}
														descriptionText={"Нажмите для просмотра"}
													/>
													<FeatureCardSmallDarkLabel
														headerText={"House for a family"}
														descriptionText={"Нажмите для просмотра"}
													/>
									</div>
									<Button
										onClick={() => {}}
										buttonText={"Читать все отзывы"}/>
									<div className={styles.ellipse}></div>
							</div>
					</div>
			</main>
		)
}

export default CatalogPage;