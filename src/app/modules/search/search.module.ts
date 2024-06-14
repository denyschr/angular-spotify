import { NgModule } from '@angular/core';
import { SearchPage } from './pages/search.page';
import { SearchRoutingModule } from './search-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SearchBarComponent,
  SearchCategoriesComponent,
  SearchNavComponent,
  SearchResultsComponent
} from './components';
import { CardModule, CategoryModule, NoResultsModule, SectionModule } from '@ui';

@NgModule({
  declarations: [
    SearchPage,
    SearchBarComponent,
    SearchNavComponent,
    SearchCategoriesComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    SectionModule,
    CategoryModule,
    CardModule,
    NoResultsModule
  ],
  exports: [SearchBarComponent]
})
export class SearchModule {}
