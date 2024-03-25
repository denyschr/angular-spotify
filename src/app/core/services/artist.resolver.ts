import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { apiResolver } from '../../shared/services';
import { ArtistService } from '../services';
import { ArtistsResponse } from '../models';

export const artistResolver: ResolveFn<ArtistsResponse> = apiResolver((id) => inject(ArtistService).getArtist(id));
