import { IPhoto } from "@/app/types/IPhoto";
import { IEmployee } from "@/app/types/IEmployee";
import { IInformation } from "@/app/types/IInformation";
import { IInformationCard } from "@/app/types/IInformationCard";
import { IMaterial } from "@/app/types/IMaterial";
import { IArticle } from "@/app/types/IArticle";
import { IPrice } from "@/app/types/IPrice";

export enum FLOORS_COUNT {
  ONE = 1,
  TWO = 2,
}

export interface ISeries {
  id: number;
  value: string;
  comment?: string;
}
export interface IProject {
  //Основное
  id: number;
  isArchive: boolean;
  isIndividual: boolean;
  series?: ISeries;
  seriesId: number;
  title?: string;
  photos?: IPhoto[];
  area?: number;
  price?: number;
  size?: number;
  bedroomsCount?: number;
  bathroomCount?: number;
  floorsCount?: FLOORS_COUNT;
  isBasement: boolean;
  isGarage: boolean;
  creationDate?: Date;
  createAt: Date;
  updateAt: Date;

  //Первая секция
  mainQuoteText?: string;
  mainQuoteAuthorId?: number;
  mainQuoteAuthor?: IEmployee;
  mainText?: string;

  //Смета
  estimateLink?: string;

  //Планировка
  layoutText?: string;

  //Интерьер
  interiorText?: string;

  //История проекта
  historyText?: string;
  historyQuoteText?: string;
  historyQuoteAuthorId?: number;
  historyQuoteAuthor?: IEmployee;

  //Наружняя отделка
  materials?: IMaterial[];
  exteriorDescriptions?: IInformationCard[]; //massive
  information?: IInformation[];

  //Готовый проект
  completeText?: string;

  //Статьи
  articles?: IArticle[];

  //Цены
  pricePackages?: IPrice[]; //massive

  //Послесловие
  postScriptumImage?: string;
  postScriptumText?: string;
}
