import { NgModule } from '@angular/core';
import { EmptyContentComponent } from './empty-content/empty-content.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [EmptyContentComponent],
  imports: [CommonModule, RouterModule],
  exports: [EmptyContentComponent]
})
export class EmptyContentModule {}
