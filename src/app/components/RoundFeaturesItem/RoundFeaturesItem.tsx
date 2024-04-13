
export interface IRoundFeaturesItemProps {
		src: string;
		headerText?: string;
		descriptionText?: string;
}
export const RoundFeaturesItem = ({src, headerText, descriptionText}: IRoundFeaturesItemProps) => {

		return (
			<div className={'roundFeaturesItemContainer'}>
					<div className={'roundFeaturesImage'} style={{
							background: `url(${src})`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',

					}}></div>

					{headerText && (<h3 style={{
							textAlign: "center",
							fontWeight: 200
					}}>{headerText}</h3>)
					}
					{descriptionText && (<h5 style={{
							textAlign: "center",
							fontWeight: 200,
					}}>{descriptionText}</h5>)}
			</div>
		)
}