import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardPageLayoutComponent, LeftSidebarComponent } from '@components';
import { RouterModule } from '@angular/router';
import {
  AlbumModule,
  ArtistModule,
  HomeModule,
  LibraryModule,
  NotFoundModule,
  PlaylistModule,
  SearchModule,
  TrackModule
} from '@modules';
import { OpacityScrollModule } from '@directives';

@NgModule({
  declarations: [StandardPageLayoutComponent, LeftSidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeModule,
    SearchModule,
    LibraryModule,
    AlbumModule,
    ArtistModule,
    PlaylistModule,
    TrackModule,
    OpacityScrollModule,
    NotFoundModule
  ]
})
export class CoreModule {}
