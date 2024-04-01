import React from "react";

interface IPhotoProps {
		src: string;
		descriptionText?: string;
}
export const FeatureCardPicture = ({ src, descriptionText}: IPhotoProps) => {
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
							{descriptionText && <h6>{descriptionText}</h6>}
					</div>
			</div>
		)
}