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
    loadChildren: () => import('./core/auth').then(m => m.LoginModule)
  },
  {
    path: '',
    component: StandardPageLayoutComponent,
    canMatch: [authGuard],
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
        path: 'artist/:id',
        loadChildren: () => import('./modules/artist/artist').then(m => m.ArtistModule)
      },
      {
        path: 'album/:id',
        loadChildren: () => import('./modules/album/album').then(m => m.AlbumModule)
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
