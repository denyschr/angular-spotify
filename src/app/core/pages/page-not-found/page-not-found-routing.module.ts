import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFound } from './page-not-found.page';

const routes: Routes = [
  {
    path: '',
    component: PageNotFound
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule {}
