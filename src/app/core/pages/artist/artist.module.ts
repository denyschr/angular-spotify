import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ArtistComponent } from './artist.component';
import { ArtistRoutingModule } from './artist-routing.module';
import { CommonModule } from '@angular/common';
import { ArtistService } from '../../services';

@NgModule({
  declarations: [ArtistComponent],
  imports: [CommonModule, ArtistRoutingModule, SharedModule],
  providers: [ArtistService]
})
export class ArtistModule {}
