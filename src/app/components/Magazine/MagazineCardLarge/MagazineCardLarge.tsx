import {LabelSmall} from "@/app/components/Labels/LabelSmall/LabelSmall";


export const MagazineCardLarge = () => {
	return (
		<div className={'magazineCardLarge'}>
				<img src={'/magazineImage.png'} alt={'magazine'} style={{width: "100%"}}></img>
				<div className={'magazineCardLargeContent'}>
						<LabelSmall text={"Текст лейбла"}/>
						<h2 style={{color: "#272B40"}}>Как строить фундамент?</h2>
						<p style={{color: "#272B40"}}>Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России. </p>
						<h6 style={{color: "#272B40"}}> дата</h6>

				</div>
		</div>
	)
}