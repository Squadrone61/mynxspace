import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-card-footer',
  template: `<ng-content></ng-content>`,
  host: { class: 'mt-4 flex flex-row space-x-4' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFooterComponent {}
