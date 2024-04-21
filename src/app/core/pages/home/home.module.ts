import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { SectionModule, SectionSkeletonModule } from '../../../shared/components';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomeRoutingModule, SectionModule, SectionSkeletonModule]
})
export class HomeModule {}
