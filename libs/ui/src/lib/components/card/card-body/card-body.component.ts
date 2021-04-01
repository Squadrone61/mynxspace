import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-card-body',
  template: ` <ng-content></ng-content> `,
  host: { class: 'block mt-4' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardBodyComponent {}
