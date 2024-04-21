import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchPage } from './pages/search.page';
import { SearchCategoriesComponent, SearchResultsComponent } from './components';

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
