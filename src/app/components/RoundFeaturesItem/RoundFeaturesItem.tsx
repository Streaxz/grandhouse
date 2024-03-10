
export interface IRoundFeaturesItemProps {
		src: string;
		headerText: string;
		descriptionText: string;
}
export const RoundFeaturesItem = ({src, headerText, descriptionText}: IRoundFeaturesItemProps) => {

		return (
			<div className={'roundFeaturesItemContainer'}>
					<div style={{
							width: "120px",
							height: "120px",
							borderRadius: "120px",
							border: "4px solid #FFF",
							background: `url(${src}), lightgray 50% / cover no-repeat`,
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundSize: "180px",
					}}></div>

					<h3>{headerText}</h3>
					<h5>{descriptionText}</h5>
			</div>
		)
}