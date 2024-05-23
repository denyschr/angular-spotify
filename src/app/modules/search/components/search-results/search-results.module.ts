import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTopResultComponent } from './search-top-result/search-top-result.component';
import { SearchTracksComponent } from './search-tracks/search-tracks.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MediaItemModule, SectionModule } from '@ui';
import { SearchResultsAllComponent } from './search-results-all/search-results-all.component';
import { SearchResultsFilteredComponent } from './search-results-filtered/search-results-filtered.component';
import { SearchResultsRoutingModule } from './search-results-routing.module';

@NgModule({
  declarations: [
    SearchTopResultComponent,
    SearchTracksComponent,
    SearchResultsComponent,
    SearchResultsAllComponent,
    SearchResultsFilteredComponent
  ],
  imports: [CommonModule, SearchResultsRoutingModule, SectionModule, MediaItemModule]
})
export class SearchResultsModule {}
