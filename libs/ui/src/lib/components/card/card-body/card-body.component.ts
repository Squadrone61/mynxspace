import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-card-body',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardBodyComponent {
  @HostBinding('class') classes = 'block my-4 first:mt-0 last:mb-0';
}
