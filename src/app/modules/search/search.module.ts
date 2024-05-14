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
import { CategoryModule, SectionModule, MediaItemModule, NoResultsModule } from '@ui';
import { IntersectionListenerModule } from '@directives';

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
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    CategoryModule,
    SectionModule,
    MediaItemModule,
    IntersectionListenerModule,
    NoResultsModule
  ],
  exports: [SearchBarComponent],
  providers: [CategoriesService]
})
export class SearchModule {}
