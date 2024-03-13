
export interface ILabelSmallProps {
		text: string
}
export const LabelSmall = ({text}: ILabelSmallProps) => {

		return (
			<div className={'labelSmall'}>
					<h5>{text}</h5>
			</div>
		)
}