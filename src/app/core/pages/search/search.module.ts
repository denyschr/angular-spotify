import { NgModule } from '@angular/core';
import { SearchPage } from './search.page';
import { SearchRoutingModule } from './search-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {
  HeaderModule,
  SidebarModule,
  FooterModule,
  BaseSectionModule,
  BaseCardModule,
  CategoryModule
} from '../../../shared/ui';

@NgModule({
  declarations: [SearchPage, SearchBarComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    BaseSectionModule,
    BaseCardModule,
    CategoryModule
  ]
})
export class SearchModule {}
