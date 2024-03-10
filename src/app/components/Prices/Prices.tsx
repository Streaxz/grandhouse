'use client';
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import {Infographics} from "@/app/components/Infographics/Infographics";
import {Sberbank} from "@/app/components/Sberbank/Sberbank";
import {Button} from "@/app/components/Button/Button";

export interface IPagesProps {

}
export const Prices = ({}: IPagesProps) => {

		return (
			<div className={'pricesContainer'}>
					<div className={'pricesWrapper'}>
							<div className={'rectanglePercent'} style={{
									background: `url(/RectanglePercent.png), lightgray 50% / cover no-repeat`
							}}/>
							<TextBlock
								rectangleColor={"#C0F"}
								textColor={"#272B40"}
								mainText={"Обоснованные цены и ипотека для всех"}
								descriptionText={"Небольшая вводка о ценовой политике и доступности ипотеке, а также о партнерах-банках, с которыми работает компания. Информация о том, что на каждой странице проекта есть полная смета и калькулятор"}
							/>
							<Infographics/>
							<Sberbank/>
							<Button
								onClick={() => {
								}}
								buttonText={"В каталог проектов"}
							/>
					</div>
			</div>
		)
}