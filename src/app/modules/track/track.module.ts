import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackRoutingModule } from './track-routing.module';
import { TrackPage } from './pages/track.page';
import { TrackService } from './services/track.service';
import { TopBarModule } from '@ui';

@NgModule({
  declarations: [TrackPage],
  imports: [CommonModule, TrackRoutingModule, TopBarModule],
  providers: [TrackService]
})
export class TrackModule {}
