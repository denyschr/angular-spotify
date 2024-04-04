import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  BaseCardComponent,
  AlbumCardComponent,
  ArtistCardComponent,
  PlaylistCardComponent,
  TopResultCardComponent,
  SongCardComponent,
  FooterComponent,
  SidebarComponent,
  SectionComponent,
  SectionSkeletonComponent,
  CategoryComponent,
  CardSkeletonComponent
} from './ui';
import { ExtractColorDirective, ShowMoreDirective, PlayBtnLabelDirective } from './directives';
import { NotFoundImagePipe } from './pipes';
import { SharedRoutingModule } from './shared-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    SectionComponent,
    CategoryComponent,
    BaseCardComponent,
    FooterComponent,
    ExtractColorDirective,
    ShowMoreDirective,
    NotFoundImagePipe,
    SectionSkeletonComponent,
    CardSkeletonComponent,
    PlayBtnLabelDirective,
    AlbumCardComponent,
    ArtistCardComponent,
    PlaylistCardComponent,
    TopResultCardComponent,
    SongCardComponent
  ],
  imports: [CommonModule, SharedRoutingModule, LazyLoadImageModule],
  exports: [
    SidebarComponent,
    HeaderComponent,
    SectionComponent,
    CategoryComponent,
    FooterComponent,
    SectionSkeletonComponent,
    TopResultCardComponent,
    SongCardComponent
  ]
})
export class SharedModule {}
