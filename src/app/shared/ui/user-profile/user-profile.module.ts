import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FirstLetterModule } from '@pipes';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, FirstLetterModule],
  exports: [UserProfileComponent]
})
export class UserProfileModule {}
