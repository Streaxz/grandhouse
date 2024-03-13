'use client';
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import {Infographics} from "@/app/components/Infographics/Infographics";
import {Sberbank} from "@/app/components/Sberbank/Sberbank";
import {Button} from "@/app/components/Button/Button";
import {PhotoButton} from "@/app/components/PhotoButton/PhotoButton";
import React from "react";

export interface IPagesProps {

}
export const Prices = ({}: IPagesProps) => {

		return (
			<div className={'pricesContainer'}>
					<div className={'pricesWrapper'}>
							{/*<div className={'rectanglePercent'} style={{*/}
							{/*		background: `url(/RectanglePercent.png), lightgray 50% / cover no-repeat`*/}
							{/*}}/>*/}
							{/*<div style={{*/}
							{/*		position: "absolute",*/}
							{/*		zIndex: 6,*/}
							{/*		background: `url(/RectanglePercent.png)`,*/}
							{/*		backgroundSize: "cover",*/}
							{/*		backgroundPosition: "center",*/}
							{/*		backgroundRepeat: "no-repeat",*/}
							{/*		width: "86%",*/}
							{/*		height: "871px",*/}

							{/*		opacity: 1*/}

							{/*}}></div>*/}
							<TextBlock
								rectangleColor={"#C0F"}
								textColor={"#272B40"}
								mainText={"Обоснованные цены и ипотека для всех"}
								descriptionText={"Небольшая вводка о ценовой политике и доступности ипотеке, а также о партнерах-банках, с которыми работает компания. Информация о том, что на каждой странице проекта есть полная смета и калькулятор"}
							/>
							<Infographics/>
							<Sberbank/>
							<PhotoButton
								backgroundSrc={"https://s3-alpha-sig.figma.com/img/3cf4/f18a/0ad9191b4d506abe39dd109697e63f60?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMq~jf5INhHeEXLlqh9Fm9DI-0jk5qUqojUW2rJLLS7r5M-Jk3nb~Z9dMBtx3DTG1ejcPdfq8x6FtW3snYeu7tN16zd0nc-pFolmMpQIaIyVIjqUhRmrfWFXBuOpxIZ547nROO45U5dbmRGinEwKWXvahu1uFOlymfPtelcGQlHPC6SmT2RC9j4KXF07eMAWqXVw62LjOFMF2Lvk6lUbSvvxsgRMrmWREngJdrcfCWlY9dGBTRLCHg0XRF06hOaf-N8YZwHElAZuxME2xVvP0cANSmTuie~~27ZG5F6X~dMO7W80Jo3dipjk1odc3INtL7FfN2nKQ~SgdDlNa0jrnQ__"}
								buttonSrc={"https://s3-alpha-sig.figma.com/img/0331/b9ca/35b59c5d90199887587d716ed1c17322?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dRgJWG0icmQJRH-azL3iZoW0qS9Xj9gg6MFs0rcubg-Bn1na8lyPuIzYWIRKRGQDN82hpkp9J-o4Uw~vSOR0ev3eXgPFVTmwKxfrYoeZXX8sO8C-dqrimv0hLjjBgCvuH39bGH0r0uN5lWhU~Ne9nVSmuntdjTw5BWDgpsiOj3axI62Dn-9~ZLEizzVO7kOOMheMUDUpxI66IpHO46fjsYRXYruHiMXQprBQCS3nAsMygRc5DBdgLNkWsiRQ~kU7SkRQfxtgD0mm-pa0Qta9mxPUJLhheXiRBsH9bmTgsiQNr1wUpWn-6BKauXLASEQ64PeH4ZEgof78QVeUrPGD~Q__"}
								buttonText={"Обсудим ваши идеи?"}
								descriptionText={"Наши менеджеры всегда на связи - свяжитесь с нами и мы предложим решения конкретно под ваши задачи"}
							/>
					</div>
			</div>
		)
}