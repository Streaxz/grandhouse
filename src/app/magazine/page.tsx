"use client";
import styles from './magazine.module.css';
import {MagazineLogo} from "@/app/components/Magazine/MagazineLogo/MagazineLogo";
import {Socials} from "@/app/components/Socials/Socials";
import {MagazineCardLarge} from "@/app/components/Magazine/MagazineCardLarge/MagazineCardLarge";
import React from "react";

const MagazinePage = () => {

		return (
			<main className={styles.page}>
					<div className={`${styles.pageWrapper}`}>
							<div className={styles.pageContainer}>
									<MagazineLogo/>
									<Socials/>
									<MagazineCardLarge/>
							</div>
					</div>
			</main>
		)
}

export default MagazinePage;