import { Album, MediaResponse } from '.';

export interface NewRelease
  extends Omit<
    Album,
    'tracks' | 'copyrights' | 'externalIds' | 'genres' | 'label' | 'popularity'
  > {}

export interface NewReleases extends MediaResponse<Album> {
  items: Album[];
}

export interface NewReleasesResponse {
  albums: NewReleases;
}
