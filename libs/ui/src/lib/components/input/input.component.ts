import {
  Component,
  ChangeDetectionStrategy,
  Input,
  forwardRef,
  ViewChild,
  Injector,
  ChangeDetectorRef,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'ui-input',
  template: `
    <div class="w-full relative h-11">
      <input
        type="text"
        placeholder=" "
        (focus)="focus = true"
        (focusout)="focus = false"
        [formControl]="control"
        class="w-full h-full leading-normal shadow-none outline-none
         px-0 mt-input bg-transparent border-none"
      />
      <label
        class="-top-0.5 absolute border border-b-1 border-gray-300 border-l-0 border-r-0 border-t-0
        h-full left-0 pointer-events-none text-gray-400 w-full"
      >
        <span
          class="absolute bottom-0 transition-all duration-300 transform
            {{ focus || control.value ? '-translate-y-7 text-xs' : '' }}"
        >
          {{ label }}
          <span *ngIf="hasError" class="mt-1 text-xs text-red-300">
            {{ '| ' + errText }}
          </span>
        </span>
      </label>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input()
  label: string;
  @Input()
  placeholder: string;
  @Input()
  error: string;
  @Input()
  formControl: FormControl;
  @Input()
  formControlName: string;

  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;
  focus = false;

  get control(): FormControl | AbstractControl {
    return (
      this.formControl ||
      this.controlContainer.control.get(this.formControlName)
    );
  }

  get hasError() {
    return this.control.errors && this.control.touched;
  }

  get errText() {
    return Object.keys(this.control.errors)[0];
  }

  constructor(private injector: Injector, private cd: ChangeDetectorRef) {}

  get controlContainer() {
    return this.injector.get(ControlContainer);
  }

  registerOnTouched(fn: never): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: never): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: never): void {
    this.formControlDirective.valueAccessor.writeValue(obj);
    this.cd.markForCheck();
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }
}
