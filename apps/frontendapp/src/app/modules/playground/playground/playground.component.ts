import { ChangeDetectionStrategy, Component } from '@angular/core';
import { btnType, buttonOptions, Colors } from '@libs/ui';

@Component({
  selector: 'mynxspace-playground',
  templateUrl: './playground.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent {
  options: buttonOptions = {
    type: btnType.ROUND,
    color: Colors.PRIMARY,
  };

  colors: Colors[] = [Colors.PRIMARY, Colors.SECONDARY];
  type: btnType[] = [
    btnType.ROUND,
    btnType.OUTLINE,
    btnType.CIRCULAR,
    btnType.SQUARE,
  ];

  setClr(e) {
    this.options = {
      ...this.options,
      color: e,
    };
  }
  setTy(e) {
    this.options = {
      ...this.options,
      type: e,
    };
  }
}
