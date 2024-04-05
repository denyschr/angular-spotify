import { NgModule } from '@angular/core';
import { SearchPage } from './search.page';
import { CategoriesComponent } from './categories/categories.component';
import { SearchRoutingModule } from './search-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TopResultComponent } from './top-result/top-result.component';
import { SongsComponent } from './songs/songs.component';
import { HeaderModule } from '../../../shared/ui/header/header.module';
import { SidebarModule } from '../../../shared/ui/sidebar/sidebar.module';
import { FooterModule } from '../../../shared/ui/footer/footer.module';
import { SectionModule } from '../../../shared/ui/section/section.module';
import { BaseCardModule } from '../../../shared/ui/card/base-card.module';
import { CategoryModule } from '../../../shared/ui/category/category.module';

@NgModule({
  declarations: [SearchPage, CategoriesComponent, SearchBarComponent, TopResultComponent, SongsComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    SectionModule,
    BaseCardModule,
    CategoryModule
  ]
})
export class SearchModule {}
