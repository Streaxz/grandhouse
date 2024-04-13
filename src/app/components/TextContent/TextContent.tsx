interface ITextProps {
		firstText: string;
		secondText: string;
		color?: string;
}

export const TextContent = ({firstText, secondText, color}: ITextProps) => {

		return (
			<div className={'text'}>
					<p className={'textColumn'} style={{color}}>{firstText}</p>
					<p className={'textColumn'} style={{color}}>{secondText}</p>
			</div>
		)
}