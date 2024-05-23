import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistPage } from './pages/artist.page';
import { artistResolver } from './services/artist.resolver';

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
