import { NgModule } from '@angular/core';
import { SearchPage } from './pages/search.page';
import { SearchRoutingModule } from './search-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SearchBarComponent,
  SearchCategoriesComponent,
  SearchNavComponent,
  SearchResultsComponent,
  SearchTracksComponent,
  SearchTopResultComponent
} from './components';
import { CategoriesService } from './services/categories.service';
import { CategoryModule, SectionModule, MediaItemModule } from '@ui';

@NgModule({
  declarations: [
    SearchPage,
    SearchBarComponent,
    SearchCategoriesComponent,
    SearchNavComponent,
    SearchResultsComponent,
    SearchTopResultComponent,
    SearchTracksComponent
  ],
  imports: [CommonModule, SearchRoutingModule, ReactiveFormsModule, CategoryModule, SectionModule, MediaItemModule],
  exports: [SearchBarComponent],
  providers: [CategoriesService]
})
export class SearchModule {}
