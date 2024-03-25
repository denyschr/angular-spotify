import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumComponent } from './album.component';
import { albumResolver } from '../../services';

const routes: Routes = [
  {
    path: '',
    component: AlbumComponent,
    resolve: { data: albumResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule {}
