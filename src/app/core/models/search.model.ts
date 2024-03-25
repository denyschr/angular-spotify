import { Albums, Artists } from '../models';

export interface SearchResponse {
  searchResults: number;
  albums: Albums;
  artists: Artists;
}
