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
    banner: { id: string; url: string }[];
    stations: { id: string; name: string }[];
    tags: string[];
    content: {
      id: string;
      mainTitle: { title: string; content: string };
      subTitle?: {
        id: string;
        title: string;
        content: { id: string; text: string }[];
        link: string;
      }[];
      route?: {
        id: string;
        images: string;
        customImages: string;
        title: string;
        content: { id: string; text: string }[];
      }[];
    }[];
  };
};

export type ProductListType = {
  id: string;
  industry: string;
  name: string;
  banner: { id: string; url: string }[];
  stations: { id: string; name: string }[];
  tags: string[];
  content: {
    id: string;
    mainTitle: { title: string; content: string };
    subTitle?: {
      id: string;
      title: string;
      content: { id: string; text: string }[];
      link: string;
    }[];
    route?: {
      id: string;
      images: string;
      customImages: string;
      title: string;
      content: { id: string; text: string }[];
    }[];
  }[];
};
