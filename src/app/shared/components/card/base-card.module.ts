import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCardComponent } from './base-card.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AlbumCardComponent } from './album-card/album-card.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { PlaylistCardComponent } from './playlist-card/playlist-card.component';
import { SongCardComponent } from './song-card/song-card.component';
import { TopResultCardComponent } from './top-result-card/top-result-card.component';
import { ExtractColorModule, PlayBtnLabelModule } from '../../directives';
import { NotFoundImageModule } from '../../pipes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BaseCardComponent,
    AlbumCardComponent,
    ArtistCardComponent,
    PlaylistCardComponent,
    SongCardComponent,
    TopResultCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LazyLoadImageModule,
    ExtractColorModule,
    PlayBtnLabelModule,
    NotFoundImageModule
  ],
  exports: [
    BaseCardComponent,
    AlbumCardComponent,
    ArtistCardComponent,
    PlaylistCardComponent,
    TopResultCardComponent,
    SongCardComponent
  ]
})
export class BaseCardModule {}
