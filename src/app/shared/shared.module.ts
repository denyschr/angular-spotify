import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  HeaderAuthComponent,
  BaseCardComponent,
  AlbumCardComponent,
  ArtistCardComponent,
  PlaylistCardComponent,
  TopResultCardComponent,
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
    HeaderAuthComponent,
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
    TopResultCardComponent
  ],
  imports: [CommonModule, SharedRoutingModule, LazyLoadImageModule],
  exports: [
    SidebarComponent,
    HeaderComponent,
    HeaderAuthComponent,
    SectionComponent,
    CategoryComponent,
    FooterComponent,
    SectionSkeletonComponent,
    TopResultCardComponent
  ]
})
export class SharedModule {}
