import {ContactsItem} from "@/app/components/ContactsItem/ContactsItem";


export interface IIdeasProps {
		text?: string;
}
export const Ideas = ({text}: IIdeasProps) => {

		return (
			<div className={'ideasContainer'}>
					<div className={'ideasContent'}>
							<div className={'ideasHeader'}>
									<h1>👋</h1>
									<h1 style={{color: "#272B40", textAlign:"center"}}> {text? text: "Обсудим ваши идеи?"}</h1>
							</div>
							<div className={'contactsContainer'}>
									<ContactsItem
										upperText={'8 800 500 35-05'}
										lowerText={'Перезвоним сразу'}
										buttonText={'Закажите Звонок'}
										onClick={() => {console.log("click")}}
									/>
									<ContactsItem
										upperText={'@grandhouse_robot'}
										lowerText={'Менеджер онлайн'}
										buttonText={'Чат в телеграме'}
										onClick={() => {console.log("click")}}
									/>
									<ContactsItem
										upperText={'8 926 100-00-00'}
										lowerText={'И здесь тоже'}
										buttonText={'Чат в WhatsApp'}
										onClick={() => {console.log("click")}}
									/>
							</div>

					</div>
					<img src={'/ideas.png'} className={'ideasImage'}/>
			</div>
		)

}