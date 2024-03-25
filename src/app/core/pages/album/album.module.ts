import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AlbumComponent } from './album.component';
import { AlbumRoutingModule } from './album-routing.module';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services';

@NgModule({
  declarations: [AlbumComponent],
  imports: [CommonModule, AlbumRoutingModule, SharedModule],
  providers: [AlbumService]
})
export class AlbumModule {}
