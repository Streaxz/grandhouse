
export interface ILabelSmallProps {
		text: string
}
export const LabelStandard = ({text}: ILabelSmallProps) => {

		return (
			<div className={'labelSmall'}>
					<h5>{text}</h5>
			</div>
		)
}