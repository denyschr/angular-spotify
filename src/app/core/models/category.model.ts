import { Image } from '../models';

export interface Categories {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: Category[];
}

export interface Category {
  href: string;
  icons: Image[];
  id: string;
  name: string;
}

export interface CategoriesResponse {
  categories: Categories;
}
