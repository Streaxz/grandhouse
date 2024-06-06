import {FooterText} from "@/app/components/Footer/FooterText/FooterText";
import {Socials} from "@/app/components/Socials/Socials";
import {FooterLogo} from "@/app/icons/FooterLogo";
import {FooterInfo} from "@/app/components/Footer/FooterInfo/FooterInfo";

export const Footer = () => {

		return (
			<div className={'footer'}>
					<div className={'footerGradient'}>
							<div className={'footerWrapper'}>
									<div className={'footerSocials'}>
											<p> Подписывайтесь на нас в соцсетях</p>
											<Socials/>
									</div>
									<FooterLogo/>
									<FooterInfo/>
							</div>
					</div>
			</div>
		)
}