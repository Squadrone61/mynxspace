import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-card-footer',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFooterComponent {
  @HostBinding('class') classes = 'mt-4 flex flex-row space-x-4';
}
