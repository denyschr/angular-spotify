import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { apiResolver } from '@services';
import { Artist } from '@models';
import { ArtistService } from './artist.service';

export const artistResolver: ResolveFn<Artist> = apiResolver(id =>
  inject(ArtistService).getArtist(id)
);
