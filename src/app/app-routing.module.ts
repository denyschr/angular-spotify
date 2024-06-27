import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandardPageLayoutComponent } from '@components';
import { authGuard } from '@guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./core/auth').then(m => m.LoginModule),
    canMatch: [authGuard({ isAuthenticated: false, otherwise: '' })]
  },
  {
    path: '',
    component: StandardPageLayoutComponent,
    canMatch: [authGuard({ isAuthenticated: true, otherwise: '/login' })],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home').then(m => m.HomeModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./modules/search/search').then(m => m.SearchModule)
      },
      {
        path: 'library',
        loadChildren: () => import('./modules/library/library').then(m => m.LibraryModule)
      },
      {
        path: 'album/:id',
        loadChildren: () => import('./modules/album/album').then(m => m.AlbumModule)
      },
      {
        path: 'artist/:id',
        loadChildren: () => import('./modules/artist/artist').then(m => m.ArtistModule)
      },
      {
        path: 'playlist/:id',
        loadChildren: () => import('./modules/playlist/playlist').then(m => m.PlaylistModule)
      },
      {
        path: 'track/:id',
        loadChildren: () => import('./modules/track/track').then(m => m.TrackModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
  {
    path: 'not-found',
    loadChildren: () => import('./modules/not-found/not-found').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
