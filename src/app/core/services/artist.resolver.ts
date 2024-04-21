import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { apiResolver, ArtistService } from '.';
import { ArtistsResponse } from '../models';

export const artistResolver: ResolveFn<ArtistsResponse> = apiResolver((id) => inject(ArtistService).getArtist(id));
