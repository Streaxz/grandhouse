import React from "react";
import {Button} from "@/app/components/Button/Button";

export interface IModalProps  {
	closeModal?: () => void,
}
export const Modal = ({closeModal}: IModalProps) => {

		const handleSubmit = () => {

		}
		return (
			<div className={'modalContainer'}>
					<div className={'modalCloseButton'}>
							<button onClick={closeModal} >
									<img className={'closeIcon'} src={'/closeIcon.svg'} alt={'close'}/>
							</button>
					</div>
					<div className={'ideasHeader'}>
							<h1>👋 </h1>
							<h1 style={{color: "#272B40", textAlign:"center"}}> Мы на связи</h1>
					</div>
					<div className={'inputGroup'}>
							<p className={'inputP'}>Ваше имя</p>
							<div style={{display: "flex", width: "100%"}}>
									<input
										id="nameInput"
										type="text"
										placeholder="Иванов Иван"
									/>
							</div>
					</div>
					<div className={'inputGroup'}>
							<p className={'inputP'}>Ваш номер</p>
							<div style={{display: "flex", width: "100%"}}>
									<input
										id="phoneInput"
										type="tel"
										placeholder="+7(999)999-99-99"
									/>
							</div>
					</div>
					<div className={'modalButton'}>
							<div className={'inputGroup'}>
									<p className={'inputButton'}>Перезвоним</p>
									<Button onClick={handleSubmit} buttonText={'Заказать звонок'}/>
							</div>
							<div className={'modalSocial'}>
									<p className={'inputButton'}>Чаты: </p>
									<div
										className={'modalSocialIconContainer'}
									>
											<a>
													<img
														src={"/emojiWhatsApp.png"}
														className={'modalSocialIcon'}
														alt={'WhatsApp'}
													/>
											</a>
											<a>
													<img
														src={'/emojiTelegram.png'}
														className={'modalSocialIcon'}
														alt={'Telegram'}
													/>
											</a>
											<a>
													<img
														src={"/emojiVk.png"}
														className={'modalSocialIcon'}
														alt={'VK'}
													/>
											</a>

									</div>
							</div>
					</div>
					<h5 style={{color: "#62698C"}}>
							Нажимая кнопку «Заказать звонок», вы подтверждаете свое согласие на обработку персональных
							данных
					</h5>
					<div
						style={{
								width: "100%",
								height: "1px",
								backgroundColor: "#FFF",
						}}
					/>
					<div className={'modalFooter'}>
							<h2 style={{color: "rgba(39, 43, 64, 1)", textAlign: "center"}}>8 800 500-35-05</h2>
							<h2 style={{color: "rgba(39, 43, 64, 1)", textAlign: "center"}}>dom@spk-gh.ru</h2>
					</div>
					<h5 style={{color: "rgba(39, 43, 64, 1)", textAlign: "center"}}>Будем рады увидиться с
							вами вживую! Наши офисы в Москве, Нижнем Новгороде и Кирове работают с понедельника по пятницу с 9
							утра до 19 вечера. Адреса</h5>
					<div className={'modalEllipse'}/>
			</div>
		)
}