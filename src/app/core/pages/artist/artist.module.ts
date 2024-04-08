import { NgModule } from '@angular/core';
import { ArtistPage } from './artist.page';
import { ArtistRoutingModule } from './artist-routing.module';
import { CommonModule } from '@angular/common';
import { ArtistService } from '../../services';
import { HeaderModule, SidebarModule, FooterModule } from '../../../shared/ui';

@NgModule({
  declarations: [ArtistPage],
  imports: [CommonModule, ArtistRoutingModule, HeaderModule, SidebarModule, FooterModule],
  providers: [ArtistService]
})
export class ArtistModule {}
