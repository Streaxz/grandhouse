interface ITextProps {
		firstText: string;
		secondText: string;
}

export const TextContent = ({firstText, secondText}: ITextProps) => {

		return (
			<div className={'text'}>
					<p className={'textColumn'}>{firstText}</p>
					<p className={'textColumn'}>{secondText}</p>
			</div>
		)
}