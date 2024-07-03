import { NgModule } from '@angular/core';
import { SearchPage } from './pages/search.page';
import { SearchRoutingModule } from './search-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SearchBarComponent,
  CategoriesComponent,
  SearchNavBarComponent,
  SearchResultsComponent,
  SearchAllResultsComponent,
  SearchFilteredResultsComponent
} from './components';
import {
  CardModule,
  CategoryModule,
  LoadingSpinnerModule,
  NoResultsModule,
  TopBarModule
} from '@ui';
import { IntersectionListenerModule, NgForTrackByIdModule } from '@directives';

@NgModule({
  declarations: [
    SearchPage,
    CategoriesComponent,
    SearchBarComponent,
    SearchNavBarComponent,
    SearchResultsComponent,
    SearchAllResultsComponent,
    SearchFilteredResultsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    TopBarModule,
    NgForTrackByIdModule,
    IntersectionListenerModule,
    CategoryModule,
    CardModule,
    NoResultsModule,
    LoadingSpinnerModule
  ]
})
export class SearchModule {}
