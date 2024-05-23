import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryModule } from '@ui';
import { CategoriesService } from '@modules/search/services/categories.service';
import { SearchCategoriesComponent } from './search-categories/search-categories.component';
import { SearchCategoriesRoutingModule } from './search-categories-routing.module';

@NgModule({
  declarations: [SearchCategoriesComponent],
  imports: [CommonModule, SearchCategoriesRoutingModule, CategoryModule],
  providers: [CategoriesService]
})
export class SearchCategoriesModule {}
