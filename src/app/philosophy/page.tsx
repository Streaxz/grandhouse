"use client";
import styles from './PhilosophyPage.module.css'
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import React from "react";
import {PictureFeaturedLarge} from "@/app/components/PictureFeaturedLarge/PictureFeaturedLarge";
import {AccentCard} from "@/app/components/AccentCard/AccentCard";
import {SignedCard} from "@/app/components/SignedCard/SignedCard";
import {ItalicTextBlock} from "@/app/components/ItalicTextBlock/ItalicTextBlock";
import {PhotoButton} from "@/app/components/PhotoButton/PhotoButton";

const PhilosophyPage = () => {

		return (
			<main className={styles.page}>
					<div className={styles.pageWrapper}>
							<div className={styles.pageContainer}>
									<TextBlock
										rectangleColor={"#CC00FF"}
										mainText={"Философия"}
										descriptionText={"Вводка про философию компании. Мы строим по готовым и индивидуальным проектам - дома и любые другие строения под ключ — из камня, рубленного бревна, профилированного и клееного бруса. "}
										textColor={"#FFF"}
									/>
									<PictureFeaturedLarge source={'/pictureFeaturedLarge.png'}/>
									<AccentCard
										header={"Гуманистичность"}
										text={"Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной"}
										source={'/happyFamily.jpeg'}
									/>
									<AccentCard
										header={"Профессионализм"}
										text={"Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной"}
										source={'/magazineImage.png'}
										alternative
									/>
									<AccentCard
										header={"Открытость"}
										text={"Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной"}
										source={'/happyFamily.jpeg'}
									/>
									<AccentCard
										header={"Ответственность"}
										text={"Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России.Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной"}
										source={'/happyFamily.jpeg'}
										alternative
									/>
									<div className={'reverseItem'}>
									<SignedCard/>
									<ItalicTextBlock/>
									</div>
									<PhotoButton
										backgroundSrc={"https://s3-alpha-sig.figma.com/img/3cf4/f18a/0ad9191b4d506abe39dd109697e63f60?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMq~jf5INhHeEXLlqh9Fm9DI-0jk5qUqojUW2rJLLS7r5M-Jk3nb~Z9dMBtx3DTG1ejcPdfq8x6FtW3snYeu7tN16zd0nc-pFolmMpQIaIyVIjqUhRmrfWFXBuOpxIZ547nROO45U5dbmRGinEwKWXvahu1uFOlymfPtelcGQlHPC6SmT2RC9j4KXF07eMAWqXVw62LjOFMF2Lvk6lUbSvvxsgRMrmWREngJdrcfCWlY9dGBTRLCHg0XRF06hOaf-N8YZwHElAZuxME2xVvP0cANSmTuie~~27ZG5F6X~dMO7W80Jo3dipjk1odc3INtL7FfN2nKQ~SgdDlNa0jrnQ__"}
										buttonSrc={"https://s3-alpha-sig.figma.com/img/0331/b9ca/35b59c5d90199887587d716ed1c17322?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dRgJWG0icmQJRH-azL3iZoW0qS9Xj9gg6MFs0rcubg-Bn1na8lyPuIzYWIRKRGQDN82hpkp9J-o4Uw~vSOR0ev3eXgPFVTmwKxfrYoeZXX8sO8C-dqrimv0hLjjBgCvuH39bGH0r0uN5lWhU~Ne9nVSmuntdjTw5BWDgpsiOj3axI62Dn-9~ZLEizzVO7kOOMheMUDUpxI66IpHO46fjsYRXYruHiMXQprBQCS3nAsMygRc5DBdgLNkWsiRQ~kU7SkRQfxtgD0mm-pa0Qta9mxPUJLhheXiRBsH9bmTgsiQNr1wUpWn-6BKauXLASEQ64PeH4ZEgof78QVeUrPGD~Q__"}
										buttonText={"Обсудим ваши идеи?"}
										descriptionText={"Наши менеджеры всегда на связи - свяжитесь с нами и мы предложим решения конкретно под ваши задачи"}
									/>
							</div>
							<div className="philosophyEllipse"></div>
					</div>
			</main>
		)
}

export default PhilosophyPage;