import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardPageLayoutComponent, LeftSidebarComponent } from '@components';
import { RouterModule } from '@angular/router';
import { AlbumModule, ArtistModule, HomeModule, NotFoundModule, SearchModule } from '@modules';

@NgModule({
  declarations: [StandardPageLayoutComponent, LeftSidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    AlbumModule,
    ArtistModule,
    HomeModule,
    NotFoundModule,
    SearchModule
  ]
})
export class CoreModule {}
