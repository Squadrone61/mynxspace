import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-card-title',
  template: `
    <span class="text-xl font-semibold"><ng-content></ng-content></span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTitleComponent {
  @HostBinding('class') classes = 'block';
}
