import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  HeaderAuthComponent,
  CardComponent,
  FooterComponent,
  SidebarComponent,
  SectionComponent,
  SectionSkeletonComponent,
  NgSkeletonComponent,
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
    CardComponent,
    FooterComponent,
    ExtractColorDirective,
    ShowMoreDirective,
    NotFoundImagePipe,
    SectionSkeletonComponent,
    NgSkeletonComponent,
    CardSkeletonComponent,
    PlayBtnLabelDirective
  ],
  imports: [CommonModule, SharedRoutingModule, LazyLoadImageModule],
  exports: [
    SidebarComponent,
    HeaderComponent,
    HeaderAuthComponent,
    SectionComponent,
    CategoryComponent,
    CardComponent,
    FooterComponent,
    SectionSkeletonComponent
  ]
})
export class SharedModule {}
