import {LabelSmall} from "@/app/components/Labels/LabelSmall/LabelSmall";


export const MagazineCardLarge = () => {
	return (
		<div className={'magazineCardLarge'}>
				<div className={"magazineCardLargeImage"}
						 style={{backgroundImage: `url(/magazineImage.png)`,
								 backgroundSize: "cover",

						 }}
				>
				</div>
				<div className={'magazineCardLargeContent'}>
						<LabelSmall text={"Текст лейбла"}/>
						<h2 style={{color: "#272B40", width: "50%"}}>Как строить фундамент?</h2>
						<p style={{color: "#272B40", height: "-webkit-fill-available", width: "80%"}}>Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России. </p>
						<h6 style={{color: "#272B40"}}> дата</h6>

				</div>
		</div>
	)
}