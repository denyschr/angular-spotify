import { Image, MediaResponse } from '.';

export interface Category {
  href: string;
  icons: Image[];
  id: string;
  name: string;
}

export interface Categories extends MediaResponse {
  items: Category[];
}

export interface CategoriesResponse {
  categories: Categories;
}
