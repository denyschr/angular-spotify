import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistPage } from './artist.page';
import { artistResolver } from '../../services';

const routes: Routes = [
  {
    path: '',
    component: ArtistPage,
    resolve: { data: artistResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule {}
