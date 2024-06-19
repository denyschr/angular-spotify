import { NgModule } from '@angular/core';
import { HomePage } from './pages/home.page';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { SectionModule, TopBarModule } from '@ui';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomeRoutingModule, TopBarModule, SectionModule]
})
export class HomeModule {}
