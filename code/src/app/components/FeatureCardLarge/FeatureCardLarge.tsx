import {LabelDark} from "@/app/components/Labels/LabelDark/LabelDark";
import React from "react";
import {LabelSmall} from "@/app/components/Labels/LabelSmall/LabelSmall";

interface IPhotoProps {
		labelText: string;
		headerText: string;
		descriptionText: string;
		isSwiper?: boolean;
}
export const FeatureCardLarge = ({ headerText, descriptionText, isSwiper}: IPhotoProps) => {
		return (
			<div
				className={'featureCardLarge'}
				style={{
						backgroundImage: `url(/house.jpeg)`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
			}}
			>
					<div className='photoGradient'/>
					<div className='featureCardLargeContainer'>
							<LabelSmall text={"Текст лейбла"}/>
							<h3 > {headerText}</h3>
							<p > {descriptionText}</p>
					</div>
			</div>
		)
}