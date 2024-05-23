import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ExtractColorModule, PlayBtnLabelModule } from '@directives';
import { NotFoundImageModule } from '@pipes';
import { RouterModule } from '@angular/router';
import {
  AlbumItemComponent,
  ArtistItemComponent,
  BaseItemComponent,
  PlaylistItemComponent,
  TopResultItemComponent,
  TrackItemComponent
} from './media-item/index';

@NgModule({
  declarations: [
    BaseItemComponent,
    AlbumItemComponent,
    ArtistItemComponent,
    PlaylistItemComponent,
    TopResultItemComponent,
    TrackItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LazyLoadImageModule,
    ExtractColorModule,
    PlayBtnLabelModule,
    NotFoundImageModule
  ],
  exports: [AlbumItemComponent, ArtistItemComponent, PlaylistItemComponent, TopResultItemComponent, TrackItemComponent]
})
export class MediaItemModule {}
