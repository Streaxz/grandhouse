export interface IMaterial {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  createAt: Date;
  updateAt: Date;
}

export interface ICreateMaterial {
  title: string;
  description: string;
  imageUrl: string;
}
