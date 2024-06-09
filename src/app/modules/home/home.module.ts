import { NgModule } from '@angular/core';
import { HomePage } from './pages/home.page';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { NewReleasesService } from './services/new-releases.service';
import { SectionModule } from '@ui';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomeRoutingModule, SectionModule],
  providers: [NewReleasesService]
})
export class HomeModule {}
