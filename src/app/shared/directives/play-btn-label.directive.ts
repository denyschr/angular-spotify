import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Album, Artist, AlbumArtist, Playlist, Track } from '../../core/models';

@Directive({
  selector: '[playBtnLabel]'
})
export class PlayBtnLabelDirective implements AfterViewInit {
  @Input('playBtnLabel') mediaItem!: Album | Artist | Playlist | Track;

  constructor(
    private _playBtnEl: ElementRef<HTMLButtonElement>,
    private _renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    if (this.mediaItem.type === 'album' || this.mediaItem.type === 'track') {
      const playBtnLabel = 'Play ' + this.mediaItem.name + ' by ' + this.formatArtistsNames(this.mediaItem.artists);
      this._renderer.setAttribute(this._playBtnEl.nativeElement, 'aria-label', playBtnLabel);
    } else {
      const playBtnLabel = 'Play ' + this.mediaItem.name;
      this._renderer.setAttribute(this._playBtnEl.nativeElement, 'aria-label', playBtnLabel);
    }
  }

  public formatArtistsNames(artists: AlbumArtist[]): string {
    return artists
      .reduce((arr: string[], artist) => {
        arr.push(artist.name);
        return arr;
      }, [])
      .join(', ');
  }
}
