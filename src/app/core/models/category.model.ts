import { Image, MediaResponseBody, MediaItemBody } from '.';

export interface Category extends Pick<MediaItemBody, 'href' | 'id' | 'name'> {
  icons: Image[];
}

export interface Categories extends MediaResponseBody<Category> {
  items: Category[];
}

export interface CategoriesResponse {
  categories: Categories;
}
