import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackPage } from './pages/track.page';
import { trackResolver } from './services/track.resolver';

const routes: Routes = [
  {
    path: '',
    component: TrackPage,
    resolve: { data: trackResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackRoutingModule {}
