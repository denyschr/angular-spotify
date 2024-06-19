import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { SearchPage } from './pages/search.page';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CategoriesComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: SearchPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CategoriesComponent
      },
      {
        matcher: url => {
          if (url.length >= 1) {
            return {
              consumed: url,
              posParams: {
                term: new UrlSegment(url[0].path, {}),
                type: new UrlSegment(url[1] ? url[1].path : '', {})
              }
            };
          }
          return null;
        },
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
