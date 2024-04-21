import { NgModule } from '@angular/core';
import { SearchPage } from './search.page';
import { SearchRoutingModule } from './search-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BaseCardModule, CategoryModule, SectionModule } from '../../../shared/components';
import { SearchCategoriesComponent } from './search-categories/search-categories.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchNavComponent } from './search-results/search-nav/search-nav.component';
import { SearchTopResultComponent } from './search-results/search-top-result/search-top-result.component';
import { SearchSongsComponent } from './search-results/search-songs/search-songs.component';

@NgModule({
  declarations: [
    SearchPage,
    SearchBarComponent,
    SearchCategoriesComponent,
    SearchResultsComponent,
    SearchNavComponent,
    SearchTopResultComponent,
    SearchSongsComponent
  ],
  imports: [CommonModule, SearchRoutingModule, ReactiveFormsModule, CategoryModule, SectionModule, BaseCardModule],
  exports: [SearchBarComponent]
})
export class SearchModule {}
