import { NgModule } from '@angular/core';
import { HomePage } from './pages/home.page';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { FooterModule, SectionModule, TopBarModule } from '@ui';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomeRoutingModule, TopBarModule, FooterModule, SectionModule]
})
export class HomeModule {}
