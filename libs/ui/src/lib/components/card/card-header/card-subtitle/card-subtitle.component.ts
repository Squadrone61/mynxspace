import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-card-subtitle',
  template: `
    <span class="text-sm text-gray-400"><ng-content></ng-content></span>
  `,
  styles: [':host{display: block}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardSubtitleComponent {}
