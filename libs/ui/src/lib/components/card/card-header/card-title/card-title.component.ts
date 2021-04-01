import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-card-title',
  template: `
    <span class="text-xl font-semibold"><ng-content></ng-content></span>
  `,
  styles: [':host{display: block}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTitleComponent {}
