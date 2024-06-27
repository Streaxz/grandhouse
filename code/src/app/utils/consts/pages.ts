import { IPageLink } from "@/app/utils/types/types";

export const PAGES: IPageLink[] = [
  {
    name: "Философия",
    link: "/philosophy",
    desktopVisible: false,
    mobileVisible: true,
    nestedLinks: [],
  },
  {
    name: "Компания",
    link: "/company",
    desktopVisible: true,
    mobileVisible: true,
    nestedLinks: [],
  },
  {
    name: "Каталог проектов",
    link: "/company",
    desktopVisible: false,
    mobileVisible: true,
    nestedLinks: [],
  },
  {
    name: "Проекты",
    link: "/catalog",
    desktopVisible: true,
    mobileVisible: false,
    nestedLinks: [],
  },
  {
    name: "Услуги",
    link: "/offers",
    desktopVisible: true,
    mobileVisible: true,
    nestedLinks: [
      {
        name: "Индивидуальное проектирование",
        link: "/individual",
      },
      {
        name: "Отделочные работы",
        link: "/finishing-works",
      },
      {
        name: "Бизнесу",
        link: "/business",
      },
    ],
  },
  {
    name: "Лес",
    link: "/forest",
    desktopVisible: true,
    mobileVisible: true,
    nestedLinks: [
      {
        name: "Профилированый брус",
        link: "/profiled-brick",
      },
      {
        name: "Клееный брус",
        link: "/cleaned-brick",
      },
      {
        name: "Клееные столбы и балки",
        link: "/steps-and-slabs",
      },
      {
        name: "Хвойные пиломатериалы",
        link: "/timber",
      },
    ],
  },
  {
    name: "Поселки",
    link: "/settlements",
    desktopVisible: true,
    mobileVisible: false,
    nestedLinks: [],
  },
  {
    name: "Работы и отзывы",
    link: "/reviews",
    desktopVisible: true,
    mobileVisible: true,
    nestedLinks: [],
  },
  {
    name: "Контакты",
    link: "/contact",
    desktopVisible: true,
    mobileVisible: true,
    nestedLinks: [],
  },
  {
    name: "Журнал",
    link: "/magazine",
    desktopVisible: true,
    mobileVisible: true,
    nestedLinks: [],
  },
];
