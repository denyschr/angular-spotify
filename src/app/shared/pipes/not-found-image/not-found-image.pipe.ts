import { Pipe, PipeTransform } from '@angular/core';
import { Image } from '../../../core/models';

@Pipe({
  name: 'notFoundImage'
})
export class NotFoundImagePipe implements PipeTransform {
  transform(images: Image[]) {
    if (images.length && images[0]?.url) return images[0].url;
    else return 'assets/images/not-found.jpg';
  }
}
