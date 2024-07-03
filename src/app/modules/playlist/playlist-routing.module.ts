import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistPage } from './pages/playlist.page';
import { playlistResolver } from './services/playlist.resolver';

const routes: Routes = [
  {
    path: '',
    component: PlaylistPage,
    resolve: { data: playlistResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule {}
