import { NgModule } from '@angular/core';
import { SearchPage } from './pages/search.page';
import { SearchRoutingModule } from './search-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SearchBarComponent,
  CategoriesComponent,
  SearchNavComponent,
  SearchResultsComponent,
  SearchAllResultsComponent,
  SearchFilteredResultsComponent
} from './components';
import { CardModule, CategoryModule, NoResultsModule, SectionModule } from '@ui';
import { IntersectionListenerModule, NgForTrackByIdModule } from '@directives';

@NgModule({
  declarations: [
    SearchPage,
    CategoriesComponent,
    SearchBarComponent,
    SearchNavComponent,
    SearchResultsComponent,
    SearchAllResultsComponent,
    SearchFilteredResultsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    IntersectionListenerModule,
    NgForTrackByIdModule,
    SectionModule,
    CategoryModule,
    CardModule,
    NoResultsModule
  ],
  exports: [SearchBarComponent]
})
export class SearchModule {}
