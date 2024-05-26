import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { StandardPageLayoutComponent, FooterComponent, HeaderComponent, SidebarComponent } from '@components';
import { AlbumModule, ArtistModule, HomeModule, NotFoundModule, SearchModule } from '@modules';

@NgModule({
  declarations: [StandardPageLayoutComponent, HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    AlbumModule,
    ArtistModule,
    HomeModule,
    NotFoundModule,
    SearchModule
  ]
})
export class CoreModule {}
