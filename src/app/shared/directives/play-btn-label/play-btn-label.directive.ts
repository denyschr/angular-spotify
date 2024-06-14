import { AfterViewInit, Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';
import { AlbumArtist, MediaItem, MediaType } from '@models';

@Directive({
  selector: '[playBtnLabel]'
})
export class PlayBtnLabelDirective implements AfterViewInit {
  private readonly _playBtnEl = inject(ElementRef<HTMLButtonElement>);
  private readonly _renderer = inject(Renderer2);
  @Input('playBtnLabel') mediaItem!: MediaItem;

  ngAfterViewInit(): void {
    if (this.mediaItem.type === MediaType.album || this.mediaItem.type === MediaType.track) {
      const playBtnLabel = `Play ${this.mediaItem.name} by ${this.formatArtistsNames(this.mediaItem.artists)}`;
      this._renderer.setAttribute(this._playBtnEl.nativeElement, 'aria-label', playBtnLabel);
      this._renderer.setAttribute(this._playBtnEl.nativeElement, 'title', playBtnLabel);
    } else {
      const playBtnLabel = `Play ${this.mediaItem.name}`;
      this._renderer.setAttribute(this._playBtnEl.nativeElement, 'aria-label', playBtnLabel);
      this._renderer.setAttribute(this._playBtnEl.nativeElement, 'title', playBtnLabel);
    }
  }

  private formatArtistsNames(artists: AlbumArtist[]): string {
    return artists
      .reduce((arr: string[], artist) => {
        arr.push(artist.name);
        return arr;
      }, [])
      .join(', ');
  }
}
