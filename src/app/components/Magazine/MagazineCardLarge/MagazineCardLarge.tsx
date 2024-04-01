import {LabelSmall} from "@/app/components/Labels/LabelSmall/LabelSmall";


export const MagazineCardLarge = () => {
	return (
		<div className={'magazineCardLarge'}>
				<div className={"magazineCardLargeImage"}
						 style={{backgroundImage: `url(/magazineImage.png)`,
								 backgroundSize: "cover",
								 backgroundPosition: "top",
								 backgroundRepeat: "no-repeat",
						 }}
				>
				</div>
				<div className={'magazineCardLargeContent'}>
						<div  className={'magazineCardLargeUpper'}>
						<LabelSmall text={"Текст лейбла"}/>
						<h2 style={{color: "#272B40", width: "80%"}}>Как строить фундамент?</h2>
						<p className={'magazineCardLargeDescription'}>Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России. </p>
								</div>
						<h6 style={{color: "#272B40"}}> дата</h6>

				</div>
		</div>
	)
}