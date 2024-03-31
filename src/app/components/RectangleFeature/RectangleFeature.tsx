
export interface IRoundFeaturesItemProps {
		src: string;
		headerText: string;
		descriptionText: string;
}
export const RectangleFeature = ({src, headerText, descriptionText}: IRoundFeaturesItemProps) => {

		return (
			<div className={'rectangleItemContainer'}>
					<h5 style={{fontWeight: 200}}>{headerText}</h5>
					<div className={'rectangleItemImage'} style={{
							background: `url(${src})`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',

					}}></div>
					<p style={{width: "60%", textAlign: "center"}}>{descriptionText}</p>
			</div>
		)
}