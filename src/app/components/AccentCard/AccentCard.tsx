
export interface IAccentCardProps {
		header: string;
		text: string;
		source: string;
		alternative?: boolean
}
export const AccentCard = ({header, text, source, alternative}: IAccentCardProps) => {

		return (
			<div className={'accentCard'} style={alternative ? {flexDirection: "row-reverse"} : {}}>
					<div className={'accentCardText'}>
							<h3>{header}</h3>
							<p>{text}</p>
							<a><p>Подробнее</p></a>
					</div>
					<div
						className={'accentCardImage'}
						style={{
							backgroundImage: `url(${source})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
						}}
					/>
			</div>
		)
}