import { NgModule } from '@angular/core';
import { ArtistPage } from './artist.page';
import { ArtistRoutingModule } from './artist-routing.module';
import { CommonModule } from '@angular/common';
import { ArtistService } from '../../services';
import { HeaderModule } from '../../../shared/ui/header/header.module';
import { SidebarModule } from '../../../shared/ui/sidebar/sidebar.module';
import { FooterModule } from '../../../shared/ui/footer/footer.module';

@NgModule({
  declarations: [ArtistPage],
  imports: [CommonModule, ArtistRoutingModule, HeaderModule, SidebarModule, FooterModule],
  providers: [ArtistService]
})
export class ArtistModule {}
