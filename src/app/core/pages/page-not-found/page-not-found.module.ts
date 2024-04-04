import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { PageNotFound } from './page-not-found.page';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PageNotFound],
  imports: [CommonModule, PageNotFoundRoutingModule, SharedModule]
})
export class PageNotFoundModule {}
