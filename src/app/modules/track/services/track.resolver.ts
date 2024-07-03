import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { apiResolver } from '@services';
import { Track } from '@models';
import { TrackService } from './track.service';

export const trackResolver: ResolveFn<Track> = apiResolver(id => inject(TrackService).getTrack(id));
