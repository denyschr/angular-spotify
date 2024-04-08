import { Image, MediaBodyResponse, MediaItem } from '.';

export interface Category extends Pick<MediaItem, 'href' | 'id' | 'name'> {
  icons: Image[];
}

export interface Categories extends MediaBodyResponse<Category> {
  items: Category[];
}

export interface CategoriesResponse {
  categories: Categories;
}
