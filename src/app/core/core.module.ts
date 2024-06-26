import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardPageLayoutComponent, LeftSidebarComponent } from '@components';
import { RouterModule } from '@angular/router';
import { AlbumModule, ArtistModule, HomeModule, NotFoundModule, SearchModule } from '@modules';
import { OpacityScrollModule } from '@directives';

@NgModule({
  declarations: [StandardPageLayoutComponent, LeftSidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    AlbumModule,
    ArtistModule,
    HomeModule,
    NotFoundModule,
    SearchModule,
    OpacityScrollModule
  ]
})
export class CoreModule {}
