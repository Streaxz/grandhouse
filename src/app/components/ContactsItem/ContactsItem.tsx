import {ButtonSmall} from "@/app/components/ButtonSmall/ButtonSmall";

export interface IContactsItemProps {
	buttonText: string;
	onClick: () => void;
	upperText: string;
	lowerText: string;
}
export const ContactsItem = ({buttonText, onClick, upperText, lowerText}: IContactsItemProps) => {

		return (
			<div className={'contactsItem'}>
					<h5 style={{color: "#272B40", textAlign: "center"}} className={'upperText'}>{upperText}</h5>
					<ButtonSmall
						buttonText={buttonText}
						onClick={onClick}
					/>
					<h5 style={{color: "#62698C", textAlign: "center"}}>{lowerText}</h5>
			</div>
		)
}