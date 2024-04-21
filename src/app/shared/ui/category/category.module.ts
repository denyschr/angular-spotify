import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ExtractColorModule } from '@directives';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CategoryComponent],
  imports: [CommonModule, RouterModule, LazyLoadImageModule, ExtractColorModule],
  exports: [CategoryComponent]
})
export class CategoryModule {}
