import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundImageModule } from '@pipes';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, RouterModule, NotFoundImageModule],
  exports: [CardComponent]
})
export class CardModule {}
