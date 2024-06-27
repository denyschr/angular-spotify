import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistPage } from './pages/playlist.page';
import { PlaylistService } from './services/playlist.service';
import { TopBarModule } from '@ui';

@NgModule({
  declarations: [PlaylistPage],
  imports: [CommonModule, PlaylistRoutingModule, TopBarModule],
  providers: [PlaylistService]
})
export class PlaylistModule {}
