import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPage } from './pages/search.page';
import { MediaSectionType } from '@models';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchCategoriesComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: SearchPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: SearchCategoriesComponent
      },
      {
        path: `:term/${MediaSectionType.All}`,
        redirectTo: ':term'
      },
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
