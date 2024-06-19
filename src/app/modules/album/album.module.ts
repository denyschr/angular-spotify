import { NgModule } from '@angular/core';
import { AlbumPage } from './pages/album.page';
import { AlbumRoutingModule } from './album-routing.module';
import { CommonModule } from '@angular/common';
import { FooterModule, TopBarModule } from '@ui';

@NgModule({
  declarations: [AlbumPage],
  imports: [CommonModule, AlbumRoutingModule, TopBarModule, FooterModule]
})
export class AlbumModule {}
