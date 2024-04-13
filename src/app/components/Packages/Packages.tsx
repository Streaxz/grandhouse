import Dropdown, {Option} from "react-dropdown";
import React from "react";


const options: Option[] = [
		{
				value: 'one',
				label: (<p style={{ color: "#62698C"}} className={'dropdownOption'}>{'one'}</p>),
		},
		{
				value: 'one',
				label: (<p style={{ color: "#62698C"}} className={'dropdownOption'}>{'one'}</p>),
		},
		{
				value: 'one',
				label: (<p style={{ color: "#62698C"}} className={'dropdownOption'}>{'one'}</p>),
		},
		{
				value: 'one',
				label: (<p style={{ color: "#62698C"}} className={'dropdownOption'}>{'one'}</p>),
		}
];
export const Packages = () => {

		return (
				<div className={'packages'}>
						<div className={'packagesHeader'}>
								<p style={{color: "#62698C"}}>Пакеты</p>
								<Dropdown
									className={"dropdown"}
									options={options}
									onChange={() => {}}
									arrowClassName={'dropdownArrow'}
									controlClassName={'dropdownControl'}
									placeholderClassName={'dropdownPlaceholder'}
									menuClassName={'dropdownMenu'}
									placeholder="Теплый контур" />
						</div>
						<div className={'packagesItem'}>
								<img className={'confirmIcon'} src={'/confirm.png'} alt={'Преимущество'}/>
								<p style={{color: "#272B40"}}>Коробка дома (фундамент – монолитная ж/б плита; разводка внутренней канализации, закладные детали ввода и вывода инженерных коммуникаций; стены/перегородки – двойной керамический кирпич, вентиляционная шахта – рядовой керамический кирпич; чердачное перекрытие – деревянные балки; покрытие кровли – металлочерепица, снегозадержатели, вентиляционные аэраторы)</p>
						</div>
						<div className={'packagesItem'}>
								<img className={'confirmIcon'} src={'/confirm.png'} alt={'Преимущество'}/>
								<p style={{color: "#272B40"}}>Строительные работы, проектирование и сопровождение проекта</p>
						</div>
						<div className={'packagesItem'}>
								<img className={'confirmIcon'} src={'/confirm.png'} alt={'Преимущество'}/>
								<p style={{color: "#272B40"}}>Окна и двери (окна – оконные блоки из ПВХ профиля с наружной ламинацией, двери – наружная металлическая дверь, временная на период отделки)</p>
						</div>
						<div className={'packagesItem'}>
								<img className={'confirmIcon'} src={'/confirm.png'} alt={'Преимущество'}/>
								<p style={{color: "#272B40"}}>Отделка фасада (утепление стен и цоколя, оштукатуривание стен, нанесение декоративной штукатурки, установка планкена на стены, подшив свесов кровли планкеном, установка водосточной системы)</p>
						</div>
						<div className={'packagesItem'}>
								<img className={'confirmIcon'} src={'/confirm.png'} alt={'Преимущество'}/>
								<p style={{color: "#272B40"}}>Отмостка и отделка цоколя (горизонтальное утепление, устройство бетонной отмостки, устройство наружных монолитных ж/б лестниц; облицовка цоколя клинкерной плиткой)</p>
						</div>
						<div className={'packagesItem'}>
								<img className={'confirmIcon'} src={'/confirm.png'} alt={'Преимущество'}/>
								<p style={{color: "#272B40"}}>Отделка полов (устройство покрытия пола террасы и крыльца из террасной доски ДПК)</p>
						</div>
						<div className={'packagesItem'}>
								<img className={'confirmIcon'} src={'/confirm.png'} alt={'Преимущество'}/>
								<p style={{color: "#272B40"}}>Инженерные коммуникации (отопление – котельное оборудование, трубопроводы, отопительные приборы, теплый пол; водоснабжение; электрика – щит, автоматика, черновая протяжка)</p>
						</div>
						<div className={'packagesItem'}>
								<img className={'confirmIcon'} src={'/confirm.png'} alt={'Преимущество'}/>
								<p style={{color: "#272B40"}}>Внутренняя отделка (утепление полов, перекрытия, крыши (в зоне гостиной); полусухая стяжка; механизированая штукатурка стен).</p>
						</div>
						<div className={'packagesFooter'}>
								<div className={'packagesPrice'}>
										<h3 style={{color: "#272B40"}}>5 461 000 ₽</h3>
										<h6 style={{color: "#272B40"}}>со скидкой 7% при подписании договора до конца 2023 года</h6>

								</div>
								<p style={{color: "#62698C", textWrap: "nowrap"}}>Построим за 3 месяца</p>

						</div>
				</div>
		)
}