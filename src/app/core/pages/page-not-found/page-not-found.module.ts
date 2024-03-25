import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, PageNotFoundRoutingModule, SharedModule]
})
export class PageNotFoundModule {}
