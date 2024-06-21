import { NgModule } from '@angular/core';
import { AlbumPage } from './pages/album.page';
import { AlbumRoutingModule } from './album-routing.module';
import { CommonModule } from '@angular/common';
import { TopBarModule } from '@ui';
import { AlbumService } from './services/album.service';

@NgModule({
  declarations: [AlbumPage],
  imports: [CommonModule, AlbumRoutingModule, TopBarModule],
  providers: [AlbumService]
})
export class AlbumModule {}
