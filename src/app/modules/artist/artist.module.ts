import { NgModule } from '@angular/core';
import { ArtistPage } from './pages/artist.page';
import { ArtistRoutingModule } from './artist-routing.module';
import { CommonModule } from '@angular/common';
import { TopBarModule } from '@ui';
import { ArtistService } from './services/artist.service';

@NgModule({
  declarations: [ArtistPage],
  imports: [CommonModule, ArtistRoutingModule, TopBarModule],
  providers: [ArtistService]
})
export class ArtistModule {}
