export interface IInformationCard {
  id: number;
  title: string;
  description: string;
  projectId: number;
  createAt: Date;
  updateAt: Date;
}

export interface ICreateInformationCard {
  title: string;
  description: string;
  projectId: number;
}

export interface IUpdateInformationCard {
  id: number;
  title: string;
  description: string;
}
