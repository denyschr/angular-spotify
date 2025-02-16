import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumPage } from './pages/album.page';
import { albumResolver } from './services/album.resolver';

const routes: Routes = [
  {
    path: '',
    component: AlbumPage,
    resolve: { data: albumResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule {}
