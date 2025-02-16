import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { apiResolver } from '@services';
import { Album } from '@models';
import { AlbumService } from './album.service';

export const albumResolver: ResolveFn<Album> = apiResolver(id => inject(AlbumService).getAlbum(id));
