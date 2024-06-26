export interface INestedLink {
  name: string;
  link: string;
}

export interface IPageLink {
  name: string;
  link: string;
  desktopVisible: boolean;
  mobileVisible: boolean;
  nestedLinks?: INestedLink[];
}
