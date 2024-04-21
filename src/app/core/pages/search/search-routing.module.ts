import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchPage } from './search.page';
import { SearchCategoriesComponent } from './search-categories/search-categories.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPage,
    children: [
      { path: '', component: SearchCategoriesComponent, pathMatch: 'full' },
      {
        path: ':term',
        component: SearchResultsComponent
      },
      {
        path: ':term/:type',
        component: SearchResultsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
