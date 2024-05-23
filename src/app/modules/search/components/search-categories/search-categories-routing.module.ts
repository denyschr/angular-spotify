import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCategoriesComponent } from './search-categories/search-categories.component';

const routes: Routes = [
  {
    path: '',
    component: SearchCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchCategoriesRoutingModule {}
