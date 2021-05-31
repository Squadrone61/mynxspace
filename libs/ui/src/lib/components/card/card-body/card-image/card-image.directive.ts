import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[uiCardImage]',
})
export class CardImageDirective {
  @HostBinding('class') classes =
    'card-image first:card-image-top last:card-image-bottom';
}
