import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistComponent } from './artist.component';
import { artistResolver } from '../../services';

const routes: Routes = [
  {
    path: '',
    component: ArtistComponent,
    resolve: { data: artistResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule {}
