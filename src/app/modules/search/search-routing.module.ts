import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPage } from './pages/search.page';
import { MediaType } from '@models';

const routes: Routes = [
  {
    path: '',
    component: SearchPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/search-categories/search-categories').then(
            m => m.SearchCategoriesModule
          ),
        pathMatch: 'full'
      },
      {
        path: ':term',
        loadChildren: () =>
          import('./components/search-results/search-results').then(m => m.SearchResultsModule)
      },
      {
        path: `:term/${MediaType.All}`,
        redirectTo: ':term'
      },
      {
        path: ':term/:type',
        loadChildren: () =>
          import('./components/search-results/search-results').then(m => m.SearchResultsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
