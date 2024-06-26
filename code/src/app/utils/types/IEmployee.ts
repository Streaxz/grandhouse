export interface IEmployee {
  id: number;
  name: string;
  surname: string;
  position?: string;
  imageUrl: string;
  createAt?: Date;
  updateAt?: Date;
}

export interface ICreateEmployee {
  name: string;
  surname: string;
  imageUrl: string;
}
