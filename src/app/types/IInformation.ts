
export interface IInformation {
	id: number;
	title: string;
	value: string;
	projectId: number;
	createAt: Date;
	updateAt: Date;
}

export interface ICreateInformation {
	title: string;
	value: string;
	projectId: number;
}

export interface IUpdateInformation {
	id: number;
	title: string;
	value: string;
}