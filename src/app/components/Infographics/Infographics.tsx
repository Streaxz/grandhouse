
export interface IInfographicsProps {

}
export const Infographics = ({}: IInfographicsProps) => {
		return (
			<div className={'infographics'}>
					<div className={'infographicsItem'} >
							<h3>156%</h3>
							<h6 style={{fontWeight: 200, width: "90px"}}>м² общей
									площади</h6>
					</div>
					<div className={'infographicsItem'} >
							<h3>3</h3>
							<h6 style={{fontWeight: 200, width: "90px"}}>просторные
									спальни</h6>
					</div>
					<div className={'infographicsItem'} >
							<h3>2</h3>
							<h6 style={{fontWeight: 200, width: "90px"}}>Ванные комнаты</h6>
					</div>
					<div className={'infographicsItem'} >
							<h6 style={{fontWeight: 200}}>От</h6>
							<h3>10</h3>
							<h6 style={{fontWeight: 200, width: "90px"}}>описание <br/>пункта</h6>
					</div>
			</div>
		)
}