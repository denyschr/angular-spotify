import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notFoundImage'
})
export class NotFoundImagePipe implements PipeTransform {
  transform(image: string | undefined) {
    if (image) return image;
    else return 'assets/images/not-found-image.jpg';
  }
}
