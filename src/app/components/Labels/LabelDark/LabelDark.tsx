
export interface ILabelSmallProps {
		text: string
}
export const LabelDark = ({text}: ILabelSmallProps) => {

		return (
			<div className={'labelDark'}>
					<h6>{text}</h6>
			</div>
		)
}