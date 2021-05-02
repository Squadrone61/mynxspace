import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-card-body',
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: block;
        margin-top: 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardBodyComponent {}
