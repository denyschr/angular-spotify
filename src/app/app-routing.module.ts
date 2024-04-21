import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { NotFoundPage } from './core/pages/not-found/not-found.page';
import { CustomRouteReuseStrategy } from './core/services/custom-route-reuse-strategy.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'home',
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
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
  {
    path: 'not-found',
    component: NotFoundPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    }
  ]
})
export class AppRoutingModule {}
