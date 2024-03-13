
export interface IQuoteProps {
		quoteText: string;
		src: string;
		text: string;
}
export const Quote = ({quoteText, src, text}: IQuoteProps) => {

		return (
			<div className={'quote'}>
					<div className={'quoteContainer'}>
							<p style={{flex: "1 0 0"}} className={'quoteText'}>{quoteText}</p>
					</div>
					<div className={'quoteAuthor'}>
							<div style={{
									width: "72px",
									height: "72px",
									borderRadius: "120px",
									border: "4px solid #FFF",
									background: `url(${src}), lightgray 50% / cover no-repeat`,
									backgroundPosition: "center",
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
							}}></div>
							<h5 className={'quoteAuthorText'}>{text}</h5>
					</div>
			</div>
		)

}