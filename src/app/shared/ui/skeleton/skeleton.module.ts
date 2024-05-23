import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonSectionComponent } from './skeleton-section/skeleton-section.component';

@NgModule({
  declarations: [SkeletonSectionComponent],
  imports: [CommonModule],
  exports: [SkeletonSectionComponent]
})
export class SkeletonModule {}
