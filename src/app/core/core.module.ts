import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../shared/services';
import { HttpClientModule } from '@angular/common/http';
import { AlbumModule, ArtistModule, HomeModule, NotFoundPageModule, SearchModule } from './pages';
import { CoreComponent } from './core.component';
import { HeaderModule, SidebarModule, FooterModule, SearchBarModule } from '../shared/components';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    SearchBarModule,
    HomeModule,
    SearchModule,
    NotFoundPageModule,
    AlbumModule,
    ArtistModule
  ],
  providers: [ApiService]
})
export class CoreModule {}
