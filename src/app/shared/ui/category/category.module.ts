import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ExtractColorModule } from '@directives';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CategoryComponent],
  imports: [CommonModule, RouterModule, ExtractColorModule],
  exports: [CategoryComponent]
})
export class CategoryModule {}
