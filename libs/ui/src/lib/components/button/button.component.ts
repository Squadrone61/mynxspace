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
    if (this._options.type === btnType.CIRCULAR) {
      return `p-4 focus:outline-none focus:ring ${this.defaultColors}`;
    } else {
      return `py-2 px-4 focus:outline-none focus:ring ${this.defaultColors}`;
    }
  }

  get defaultColors() {
    if (this._options.color === Colors.SECONDARY) {
      return `ring-secondary-light`;
    } else {
      return `ring-primary-light`;
    }
  }

  get typeClass() {
    if (this._options.type === btnType.OUTLINE) {
      return (
        `border-solid border-2 bg-back-light hover:text-text-light rounded ` +
        `dark:bg-back-dark dark:text-text-dark ${this.outlineColors}`
      );
    }
    if (this._options.type === btnType.SQUARE) {
      return `${this.fillColors} rounded-none`;
    }
    if (this._options.type === btnType.DEFAULT) {
      return `${this.fillColors} rounded`;
    }
    if (this._options.type === btnType.CIRCULAR) {
      return `${this.fillColors} rounded-full`;
    }
  }

  private get fillColors() {
    if (this._options.color === Colors.SECONDARY)
      return `bg-secondary hover:bg-secondary-light text-white`;
    else {
      return `bg-primary hover:bg-primary-light text-white`;
    }
  }

  private get outlineColors() {
    if (this._options.color === Colors.SECONDARY) {
      return (
        `border-secondary hover:bg-secondary text-secondary ` +
        `dark:border-secondary dark:hover:bg-secondary`
      );
    } else
      return (
        `border-primary hover:bg-primary text-primary ` +
        `dark:border-primary dark:hover:bg-primary`
      );
  }

  private;
}
