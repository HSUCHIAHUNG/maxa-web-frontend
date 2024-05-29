// type.ts

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

export type SubMenuKeys = '業者' | '車種設施';

