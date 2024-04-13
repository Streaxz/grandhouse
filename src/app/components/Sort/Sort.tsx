
export const Sort = () => {
		return (
			<div className={'sort'}>
					<p> Сортировать </p>
					<div className={'sortContainer'}>
					<h5 style={{textWrap: "nowrap"}}> По площади <img src={'/sortIcon.png'} alt={'sort'} className={'sortIcon'}/></h5>
					<h5 style={{textWrap: "nowrap"}} > По цене <img src={'/sortIcon.png'} alt={'sort'} className={'sortIcon'}/></h5>
					<h5 style={{textWrap: "nowrap"}} > По новизне <img src={'/sortIcon.png'} alt={'sort'} className={'sortIcon'}/></h5>
					</div>
			</div>
		)
}