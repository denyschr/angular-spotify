import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { apiResolver } from '@services';
import { AlbumsResponse } from '@models';
import { AlbumService } from './album.service';

export const albumResolver: ResolveFn<AlbumsResponse> = apiResolver((id) => inject(AlbumService).getAlbum(id));
