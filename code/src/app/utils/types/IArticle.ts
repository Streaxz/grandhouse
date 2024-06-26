export interface IArticle {
  id: number;
  title: string;
  description?: string;
  publicationDate?: Date;
  projectId?: number;
  createAt: Date;
  updateAt: Date;
}
