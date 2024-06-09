import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtractColorModule, PlayBtnLabelModule } from '@directives';
import { NotFoundImageModule } from '@pipes';
import { RouterModule } from '@angular/router';
import {
  BaseCardComponent,
  AlbumCardComponent,
  ArtistCardComponent,
  PlaylistCardComponent
} from './card/index';

@NgModule({
  declarations: [BaseCardComponent, AlbumCardComponent, ArtistCardComponent, PlaylistCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    ExtractColorModule,
    PlayBtnLabelModule,
    NotFoundImageModule
  ],
  exports: [AlbumCardComponent, ArtistCardComponent, PlaylistCardComponent]
})
export class CardModule {}
