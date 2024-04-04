import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ArtistPage } from './artist.page';
import { ArtistRoutingModule } from './artist-routing.module';
import { CommonModule } from '@angular/common';
import { ArtistService } from '../../services';

@NgModule({
  declarations: [ArtistPage],
  imports: [CommonModule, ArtistRoutingModule, SharedModule],
  providers: [ArtistService]
})
export class ArtistModule {}
