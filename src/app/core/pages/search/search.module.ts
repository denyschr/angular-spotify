import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SearchComponent } from './search.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchRoutingModule } from './search-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TopResultComponent } from './top-result/top-result.component';

@NgModule({
  declarations: [SearchComponent, CategoriesComponent, SearchBarComponent, TopResultComponent],
  imports: [CommonModule, SearchRoutingModule, SharedModule, ReactiveFormsModule]
})
export class SearchModule {}
