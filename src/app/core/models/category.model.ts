import { Image, MediaCollection, MediaItem } from '../models';

export interface Category extends Pick<MediaItem, 'href' | 'id' | 'name'> {
  icons: Image[];
}

export interface Categories extends MediaCollection<Category> {
  items: Category[];
}

export interface CategoriesResponse {
  categories: Categories;
}
