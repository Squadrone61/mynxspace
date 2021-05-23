import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { btnOptions, btnType, Colors } from "@libs/ui";

@Component({
  selector: 'ui-button',
  template: ` <button
    class="{{ defaultClasses }} {{ paddingClasses }} {{ typeClasses }}"
    [disabled]="disabled"
    (click)="uiClick.emit($event)"
  >
    <span class="flex flex-row justify-items-center">
      <svg-icon
        class="leading-none"
        fontSize="1.875rem"
        *ngIf="_options.icon && !loading"
        [key]="_options.icon"
      ></svg-icon>
      <svg-icon
        class="leading-none"
        fontSize="1.5rem"
        *ngIf="loading"
        key="loading"
      ></svg-icon>

      <span
        #txt
        class="self-center"
        [class.ml-2]="!!txt.innerText && (_options.icon || loading)"
      >
        <ng-content></ng-content>
      </span>
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

  @Input()
  set type(t: btnType) {
    this._options.type = t;
  }

  @Input()
  set color(c: Colors) {
    this._options.color = c;
  }

  @Input()
  set icon(i: string) {
    this._options.icon = i;
  }

  @Input()
  disabled: boolean;

  @Input()
  loading: boolean;

  @Output()
  uiClick: EventEmitter<MouseEvent> = new EventEmitter();

  get defaultClasses() {
    return `transition-all duration-300 font-bold uppercase disabled:opacity-50 focus:outline-none focus:ring ${this.colorClasses}`;
  }

  get paddingClasses() {
    return `p-4`;
  }

  get colorClasses() {
    if (this._options.color === Colors.SECONDARY) {
      return `ring-secondary-light`;
    } else {
      return `ring-primary-light`;
    }
  }

  get typeClasses() {
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
    if (this._options.color === Colors.SECONDARY) {
      return `bg-secondary hover:bg-secondary-light dark:bg-secondary-dark dark:hover:bg-secondary-light text-white`;
    } else if (this._options.color === Colors.PRIMARY) {
      return `bg-primary hover:bg-primary-light dark:bg-primary-dark dark:hover:bg-primary-light text-white`;
    } else if (this._options.color === Colors.PLAIN) {
      return `bg-hovered-light dark:bg-hovered-dark
      bg-opacity-0 dark:bg-opacity-0
      hover:bg-opacity-20 dark:hover:bg-opacity-20`;
    }
  }

  private get outlineColors() {
    if (this._options.color === Colors.SECONDARY) {
      return (
        `border-secondary dark:border-secondary-dark hover:bg-secondary text-secondary ` +
        `dark:border-secondary dark:hover:bg-secondary`
      );
    } else if (this._options.color === Colors.PRIMARY) {
      return (
        `border-primary dark:border-primary-dark hover:bg-primary text-primary ` +
        `dark:border-primary dark:hover:bg-primary`
      );
    }
  }
}
