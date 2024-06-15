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
import { IntersectionListenerModule } from '@directives';
import { SearchAllResultsComponent } from './components/search-all-results/search-all-results.component';
import { SearchFilteredResultsComponent } from './components/search-filtered-results/search-filtered-results.component';

@NgModule({
  declarations: [
    SearchPage,
    SearchBarComponent,
    SearchNavComponent,
    SearchCategoriesComponent,
    SearchResultsComponent,
    SearchAllResultsComponent,
    SearchFilteredResultsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    IntersectionListenerModule,
    SectionModule,
    CategoryModule,
    CardModule,
    NoResultsModule
  ],
  exports: [SearchBarComponent]
})
export class SearchModule {}
