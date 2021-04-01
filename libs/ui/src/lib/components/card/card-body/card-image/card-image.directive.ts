import { Directive } from '@angular/core';

@Directive({
  selector: '[ui-card-image]',
  host: { class: 'card-image first:card-image-top last:card-image-bottom' },
})
export class CardImageDirective {}
