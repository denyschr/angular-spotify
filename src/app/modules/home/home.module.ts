import { NgModule } from '@angular/core';
import { HomePage } from './pages/home.page';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { TopBarModule, CardModule, LoadingSpinnerModule } from '@ui';
import { NgForTrackByIdModule } from '@directives';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgForTrackByIdModule,
    TopBarModule,
    CardModule,
    LoadingSpinnerModule
  ]
})
export class HomeModule {}
