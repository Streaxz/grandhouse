
export interface IInfographicsProps {
	area?: number;
	size?: number;
	bedroomsCount?: number;
	bathroomCount?: number;
	price?: number;

}
export const Infographics = ({
	bathroomCount,
	size,
	area,
	bedroomsCount,
	price
														 }: IInfographicsProps) => {
		return (
			<div className={'infographics'}>
				{area &&
					<div className={'infographicsItem'} >
							<h3>{area}</h3>
							<h6 className={'infographicsText'}>м² общей
									площади</h6>
					</div>
				}
				{bedroomsCount &&
					<div className={'infographicsItem'} >
							<h3>3</h3>
							<h6 className={'infographicsText'}>просторные
									спальни</h6>
					</div>
				}
				{bathroomCount &&
					<div className={'infographicsItem'} >
							<h3>2</h3>
							<h6 className={'infographicsText'}>Ванные комнаты</h6>
					</div>
				}
				{price &&
					<div className={'infographicsItem'} >
							<h6 style={{fontWeight: 200}}>От</h6>
							<h3>{price}</h3>
							<h6 className={'infographicsText'}>млн<br/>руб</h6>
					</div>
				}
			</div>
		)
}