
export interface IPaginationProps {
		activeIndex: number;
}
export const Pagination = ({activeIndex }:IPaginationProps) => {

		return (
				<div className={'pagination'}>
					{/*	<div>Назад</div>*/}
					{/*{[...Array(3)].map((_, index) => (*/}
					{/*	<div*/}
					{/*		className={activeIndex === index ? 'paginationItemActive' : 'paginationItem'}*/}
					{/*		onClick={() => {}}*/}
					{/*	></div>*/}
					{/*))}*/}
				</div>

		)

}