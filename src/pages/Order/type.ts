export interface ProductType {
  id: string;
  industry: string;
  name: string;
  imageUrl: string;
  description: string;
  tags: string[];
}

export type ProductList = ProductType[];

export interface Filters {
  industry: string[];
  facility: string[];
  region: string[];
}

export type SubMenuKeys = "業者" | "車種設施";

export type ProductAPIType = {
  [key: string]: {
    id: string;
    industry: string;
    name: string;
    stations: string[];
    tags: string[];
    content: {
      title: string;
      titleContent: string;
      subTitle: { title: string; subTitleContent: string }[];
      subTitleLink: string;
      routeImg: string;
      routeImgTitle: string;
      routeImgContent: string[];
    }[];
  };
};

export type ProductListType = {
  id: string;
  industry: string;
  name: string;
  stations: string[];
  tags: string[];
  content: {
    title: string;
    titleContent: string;
    subTitle: { title: string; subTitleContent: string }[];
    subTitleLink: string;
    routeImg: string;
    routeImgTitle: string;
    routeImgContent: string[];
  }[];
};
