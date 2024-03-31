import React from "react";

interface IPhotoProps {
		src: string;
		descriptionText: string;
		isSwiper?: boolean;
}
export const FeatureCardPicture = ({ src, descriptionText, isSwiper}: IPhotoProps) => {
		return (
			<div
				className={'featureCardLarge'}
				style={{
						backgroundImage: `url(${src})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
				}}
			>
					<div className='featureCardLargeContainer'>
							<h6>{descriptionText}</h6>
					</div>
			</div>
		)
}