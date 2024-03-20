import React from "react";

export const SignedCard = () => {

		return (
			<div
				className="signedCardContainer"
				style={{backgroundImage: `url(/sunset.jpeg)`}}
			>
					<div className='signedCardGradient'/>
					<div className='signedCardContent'>
							<h3>Взгляд за горизонт</h3>
							<p style={{height: "100%"}}>
									Небольшой финальный аккорд. Грандхаус всегда смотрит в будущее, и не только в архитектуре и
									строительстве, но и в медийных подходах. Мы не просто возводим дома - но и рассказываем об этом.
							</p>
							<div>
									<h6>
											Генеральный директор
											<br/>
											Никита Кузнецов
									</h6>
									<img src={'/sign.png'} className={'signedCardSign'}/>
							</div>
					</div>
					<img src={'/kuznetsov.png'} className={'signedCardImage'}/>
			</div>
		)
}

