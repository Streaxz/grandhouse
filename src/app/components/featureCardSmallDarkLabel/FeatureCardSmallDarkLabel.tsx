import {LabelDark} from "@/app/components/Labels/LabelDark/LabelDark";
import React from "react";

export interface ICardProps {

	headerText: string
	descriptionText: string
	isSwiper?: boolean
}
export const FeatureCardSmallDarkLabel = ({ headerText, descriptionText}: ICardProps) => {
		return (
			<div
				className={`featureCardSmallDarkLabel`}
				style={{
						backgroundImage: `url(/house.jpeg)`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat"}}
			>
					<div className='featureCardSmallDarkLabelGradient'/>
					<div className='featureCardSmallDarkLabelContent'>
							<LabelDark text={"Текст лейбла"}/>
							<h3 > {headerText}</h3>
							<p > {descriptionText}</p>
					</div>
			</div>
		)
}