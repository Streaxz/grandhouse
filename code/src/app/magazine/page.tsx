"use client";
import styles from './magazine.module.css';
import {MagazineLogo} from "@/app/components/Magazine/MagazineLogo/MagazineLogo";
import {Socials} from "@/app/components/Socials/Socials";
import {MagazineCardLarge} from "@/app/components/Magazine/MagazineCardLarge/MagazineCardLarge";
import React from "react";
import {MagazineNavigation} from "@/app/components/MagazineNavigation/MagazineNavigation";
import {MagazineCardSmall} from "@/app/components/Magazine/MagazineCardSmall/MagazineCardSmall";
import {Button} from "@/app/components/Button/Button";

const MagazinePage = () => {

		return (
			<main className={styles.page}>
					<div className={`${styles.pageWrapper}`}>
							<div className={styles.pageContainer}>
									<MagazineLogo/>
									<Socials/>
									<MagazineNavigation/>
									<MagazineCardLarge/>
									<div className={'doubleItem'}>
											<MagazineCardSmall/>
											<MagazineCardSmall/>
									</div>
									<MagazineCardLarge/>
									<div className={'doubleItem'}>
											<MagazineCardSmall/>
											<MagazineCardSmall/>
									</div>
									<Button
										onClick={() => {}}
										buttonText={'Загрузить ещё'}
									></Button>
									<div className="magazineEllipse"></div>
							</div>
					</div>
			</main>
		)
}

export default MagazinePage;