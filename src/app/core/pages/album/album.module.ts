import { NgModule } from '@angular/core';
import { AlbumPage } from './album.page';
import { AlbumRoutingModule } from './album-routing.module';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services';
import { FooterModule } from '../../../shared/ui/footer/footer.module';
import { HeaderModule } from '../../../shared/ui/header/header.module';
import { SidebarModule } from '../../../shared/ui/sidebar/sidebar.module';

@NgModule({
  declarations: [AlbumPage],
  imports: [CommonModule, AlbumRoutingModule, HeaderModule, SidebarModule, FooterModule],
  providers: [AlbumService]
})
export class AlbumModule {}
