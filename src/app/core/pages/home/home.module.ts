import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import {
  HeaderModule,
  SidebarModule,
  FooterModule,
  BaseSectionModule,
  SectionSkeletonModule
} from '../../../shared/ui';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    BaseSectionModule,
    SectionSkeletonModule
  ]
})
export class HomeModule {}
