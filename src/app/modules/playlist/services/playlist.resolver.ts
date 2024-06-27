import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { apiResolver } from '@services';
import { Playlist } from '@models';
import { PlaylistService } from './playlist.service';

export const playlistResolver: ResolveFn<Playlist> = apiResolver(id =>
  inject(PlaylistService).getPlaylist(id)
);
