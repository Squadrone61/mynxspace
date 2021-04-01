import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { btnOptions, btnType, Colors } from '../../models';

@Component({
  selector: 'ui-button',
  template: ` <button [ngClass]="defaultClasses + ' ' + typeClass">
    <span class="align-text-bottom">
      <ng-content></ng-content>
    </span>
  </button>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  _options: btnOptions = {
    color: Colors.PRIMARY,
    type: btnType.DEFAULT,
    iconPosition: 'none',
    icon: null,
  };
  @Input()
  set options(o: Partial<btnOptions>) {
    if (o) {
      this._options = {
        ...this._options,
        ...o,
      };
    }
  }

  get defaultClasses() {
    return `py-2 px-4 focus:outline-none focus:ring ring-${this._options.color}-light`;
  }

  get typeClass() {
    if (this._options.type === btnType.OUTLINE) {
      return (
        `border-solid border-2 border-${this._options.color} bg-back-light hover:bg-${this._options.color} text-${this._options.color} hover:text-text-light rounded ` +
        `dark:border-${this._options.color} dark:bg-back-dark dark:hover:bg-${this._options.color} dark:text-text-dark `
      );
    }
    if (this._options.type === btnType.SQUARE) {
      return `${this.normalBg} rounded-none`;
    }
    if (this._options.type === btnType.DEFAULT) {
      return `${this.normalBg} rounded`;
    }
    if (this._options.type === btnType.CIRCULAR) {
      return `${this.normalBg} rounded-full`;
    }
  }

  private get normalBg() {
    return `bg-${this._options.color} hover:bg-${this._options.color}-light text-white`;
  }
}
