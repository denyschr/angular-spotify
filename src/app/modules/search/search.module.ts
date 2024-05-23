import { NgModule } from '@angular/core';
import { SearchPage } from './pages/search.page';
import { SearchRoutingModule } from './search-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent, SearchNavComponent } from './components';

@NgModule({
  declarations: [SearchPage, SearchBarComponent, SearchNavComponent],
  imports: [CommonModule, SearchRoutingModule, ReactiveFormsModule],
  exports: [SearchBarComponent]
})
export class SearchModule {}
