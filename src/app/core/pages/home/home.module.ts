import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule]
})
export class HomeModule {}
