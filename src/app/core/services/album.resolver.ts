import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { apiResolver } from '../../shared/services';
import { AlbumService } from '../services';
import { AlbumsResponse } from '../models';

export const albumResolver: ResolveFn<AlbumsResponse> = apiResolver((id) => inject(AlbumService).getAlbum(id));
