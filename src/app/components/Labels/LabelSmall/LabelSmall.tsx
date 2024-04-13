
export interface ILabelSmallProps {
		text: string
}
export const LabelSmall = ({text}: ILabelSmallProps) => {

		return (
			<div className={'labelSmall'}>
					<h6>{text}</h6>
			</div>
		)
}