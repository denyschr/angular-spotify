import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { UserProfileModule } from '@ui';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, RouterModule, UserProfileModule],
  exports: [TopBarComponent]
})
export class TopBarModule {}
