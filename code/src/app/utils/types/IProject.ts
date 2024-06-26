import { IPhoto } from "@/app/utils/types/IPhoto";
import { IEmployee } from "@/app/utils/types/IEmployee";
import { IInformation } from "@/app/utils/types/IInformation";
import { IInformationCard } from "@/app/utils/types/IInformationCard";
import { IMaterial } from "@/app/utils/types/IMaterial";
import { IArticle } from "@/app/utils/types/IArticle";
import { IPrice } from "@/app/utils/types/IPrice";

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
