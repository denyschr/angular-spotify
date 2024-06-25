import { NgModule } from '@angular/core';
import { NotFoundPage } from './pages/not-found.page';
import { RouterModule } from '@angular/router';
import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
  declarations: [NotFoundPage],
  imports: [RouterModule, NotFoundRoutingModule]
})
export class NotFoundModule {}
