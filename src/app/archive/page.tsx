"use client";
import styles from './archive.module.css'
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import React from "react";
import {Button} from "@/app/components/Button/Button";
import {CatalogItem} from "@/app/components/Catalog/CatalogItem";
import {Filters} from "@/app/components/Filters/Filters";
import {Sort} from "@/app/components/Sort/Sort";

const ArchivePage = () => {

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
									<Sort>

									</Sort>
									<div className={styles.catalogContainer}>
											<div className={styles.flexItem}>
													<CatalogItem
														isArchive
													/>
											</div>
											<div className={styles.flexItem}>
													<CatalogItem
														isArchive
													/>
											</div>
											<div className={styles.flexItem}>
													<CatalogItem
														isArchive
													/>
											</div>
											<div className={styles.flexItem}>
													<CatalogItem
														isArchive
													/>
											</div>
											<div className={styles.flexItem}>
													<CatalogItem
														isArchive
													/>
											</div>
											<div className={styles.flexItem}>
													<CatalogItem
														isArchive
													/>
											</div>
											<div className={styles.flexItem}>
													<CatalogItem
														isArchive
													/>
											</div>
											<div className={styles.flexItem}>
													<CatalogItem
														isArchive
													/>
											</div>
											<div className={styles.flexItem}>
													<CatalogItem
														isArchive
													/>
											</div>
									</div>
									<Button
										onClick={() => {}}
										buttonText={'Загрузить еще'}
									/>
							</div>
					</div>
			</main>
		)
}

export default ArchivePage;