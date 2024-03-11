
export const MagazineCardSmall = () => {

		return (
			<div className={'magazineCardSmall'}
					 style={{
							 backgroundImage: `url(/house.jpeg)`,
							 backgroundSize: "cover",
							 backgroundPosition: "center",
							 backgroundRepeat: "no-repeat"
					 }}
			>
					<div className={'magazineCardSmallGradient'}/>
					<div className={'magazineCardSmallContainer'}>
							<h2>Как строить фундамент?</h2>
							<p style={{height: '-webkit-fill-available'}}> Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной
									России.</p>
							<h6> дата</h6>

					</div>
			</div>
		)
}