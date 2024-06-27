import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardPageLayoutComponent, LeftSidebarComponent } from '@components';
import { RouterModule } from '@angular/router';
import { OpacityScrollModule } from '@directives';

@NgModule({
  declarations: [StandardPageLayoutComponent, LeftSidebarComponent],
  imports: [CommonModule, RouterModule, OpacityScrollModule]
})
export class CoreModule {}
