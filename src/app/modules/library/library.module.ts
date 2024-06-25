import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryPage } from './pages/library.page';
import { CardModule, EmptyContentModule, LoadingSpinnerModule, TopBarModule } from '@ui';
import { NgForTrackByIdModule } from '@directives';

@NgModule({
  declarations: [LibraryPage],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    NgForTrackByIdModule,
    TopBarModule,
    CardModule,
    EmptyContentModule,
    LoadingSpinnerModule
  ]
})
export class LibraryModule {}
