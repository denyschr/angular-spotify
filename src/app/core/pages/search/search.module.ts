import { NgModule } from '@angular/core';
import { SearchPage } from './search.page';
import { SearchRoutingModule } from './search-routing.module';
import { CommonModule } from '@angular/common';
import { BaseSectionModule, BaseCardModule, CategoryModule } from '../../../shared/components';
import { SearchNavComponent } from './search-nav/search-nav.component';

@NgModule({
  declarations: [SearchPage, SearchNavComponent],
  imports: [CommonModule, SearchRoutingModule, BaseSectionModule, BaseCardModule, CategoryModule]
})
export class SearchModule {}
