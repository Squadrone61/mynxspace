import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { cardOptions, cardType } from '../../models/card';

@Component({
  selector: 'ui-card',
  template: `
    <div [ngClass]="cardClasses">
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  _options: cardOptions = {
    type: cardType.DEFAULT,
  };
  @Input()
  set options(o: Partial<cardOptions>) {
    if (o) {
      this._options = {
        ...this._options,
        ...o,
      };
    }
  }

  get cardClasses() {
    return this._options.type === cardType.DEFAULT
      ? `block relative p-4 rounded shadow dark:shadow-dark overflow-hidden ${this._options.customClasses}`
      : this._options.customClasses || '';
  }
}
