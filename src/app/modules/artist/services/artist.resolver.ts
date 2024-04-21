import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { apiResolver } from '@services';
import { ArtistsResponse } from '@models';
import { ArtistService } from './artist.service';

export const artistResolver: ResolveFn<ArtistsResponse> = apiResolver((id) => inject(ArtistService).getArtist(id));
