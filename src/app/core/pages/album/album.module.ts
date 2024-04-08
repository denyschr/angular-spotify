import { NgModule } from '@angular/core';
import { AlbumPage } from './album.page';
import { AlbumRoutingModule } from './album-routing.module';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services';
import { HeaderModule, SidebarModule, FooterModule } from '../../../shared/ui';

@NgModule({
  declarations: [AlbumPage],
  imports: [CommonModule, AlbumRoutingModule, HeaderModule, SidebarModule, FooterModule],
  providers: [AlbumService]
})
export class AlbumModule {}
