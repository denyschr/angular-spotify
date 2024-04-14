import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { BaseSectionModule, SectionSkeletonModule } from '../../../shared/components';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomeRoutingModule, BaseSectionModule, SectionSkeletonModule]
})
export class HomeModule {}
