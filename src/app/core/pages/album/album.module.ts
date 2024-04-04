import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AlbumPage } from './album.page';
import { AlbumRoutingModule } from './album-routing.module';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services';

@NgModule({
  declarations: [AlbumPage],
  imports: [CommonModule, AlbumRoutingModule, SharedModule],
  providers: [AlbumService]
})
export class AlbumModule {}
