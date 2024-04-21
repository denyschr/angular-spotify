import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { AlbumService, apiResolver } from '.';
import { AlbumsResponse } from '../models';

export const albumResolver: ResolveFn<AlbumsResponse> = apiResolver((id) => inject(AlbumService).getAlbum(id));
