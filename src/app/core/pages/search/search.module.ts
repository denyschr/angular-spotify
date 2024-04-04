import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SearchPage } from './search.page';
import { CategoriesComponent } from './categories/categories.component';
import { SearchRoutingModule } from './search-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TopResultComponent } from './top-result/top-result.component';
import { SongsComponent } from './songs/songs.component';

@NgModule({
  declarations: [SearchPage, CategoriesComponent, SearchBarComponent, TopResultComponent, SongsComponent],
  imports: [CommonModule, SearchRoutingModule, SharedModule, ReactiveFormsModule]
})
export class SearchModule {}
