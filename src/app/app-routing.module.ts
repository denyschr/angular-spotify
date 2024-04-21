import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from './modules/not-found/pages/not-found.page';
import { CustomRouteReuseStrategy } from './core/services';
import { DefaultLayoutComponent } from './core/components/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home').then((m) => m.HomeModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./modules/search/search').then((m) => m.SearchModule)
      },
      {
        path: 'artist/:id',
        loadChildren: () => import('./modules/artist/artist').then((m) => m.ArtistModule)
      },
      {
        path: 'album/:id',
        loadChildren: () => import('./modules/album/album').then((m) => m.AlbumModule)
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
