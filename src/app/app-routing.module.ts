import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./core/pages/search/search.module').then((m) => m.SearchModule)
  },
  {
    path: 'artist/:id',
    loadChildren: () => import('./core/pages/artist/artist.module').then((m) => m.ArtistModule)
  },
  {
    path: 'album/:id',
    loadChildren: () => import('./core/pages/album/album.module').then((m) => m.AlbumModule)
  },
  {
    path: 'pageNotFound',
    loadChildren: () => import('./core/pages/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule)
  },
  {
    path: '**',
    redirectTo: 'pageNotFound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
