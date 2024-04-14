import { NgModule } from '@angular/core';
import { ArtistPage } from './artist.page';
import { ArtistRoutingModule } from './artist-routing.module';
import { CommonModule } from '@angular/common';
import { ArtistService } from '../../services';

@NgModule({
  declarations: [ArtistPage],
  imports: [CommonModule, ArtistRoutingModule],
  providers: [ArtistService]
})
export class ArtistModule {}
