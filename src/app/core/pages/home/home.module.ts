import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../../shared/ui/header/header.module';
import { SidebarModule } from '../../../shared/ui/sidebar/sidebar.module';
import { FooterModule } from '../../../shared/ui/footer/footer.module';
import { SectionModule } from '../../../shared/ui/section/section.module';
import { SectionSkeletonModule } from '../../../shared/ui/section-skeleton/section-skeleton.module';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    SectionModule,
    SectionSkeletonModule
  ]
})
export class HomeModule {}
