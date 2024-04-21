import { NgModule } from '@angular/core';
import { NotFoundPage } from './pages/not-found.page';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotFoundPage],
  imports: [CommonModule, RouterModule]
})
export class NotFoundModule {}
