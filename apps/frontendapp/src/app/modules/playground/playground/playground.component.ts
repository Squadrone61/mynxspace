import { ChangeDetectionStrategy, Component } from '@angular/core';
import { btnOptions, btnType, Colors } from '@libs/ui';

@Component({
  selector: 'mynxspace-playground',
  templateUrl: './playground.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent {
  imgSrc =
    'https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2020/08/14/440866-1854448434.jpg?itok=QD0-zZeA';

  loremText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla ex, euismod sed aliquam molestie, aliquet nec nunc.' +
    ' Integer faucibus euismod ex, scelerisque suscipit orci cursus at. Aenean accumsan finibus magna in varius. Nulla cursus ' +
    'suscipit mauris eu dignissim. Maecenas sodales dui arcu, eu porta nisi luctus id. Maecenas in enim purus. Maecenas placerat'; /*+
    ' urna eget sem porta, sed dictum ligula sollicitudin. Curabitur et pharetra tortor. Phasellus id dolor tempus, dapibus ' +
    'velit ut, pretium purus. Vestibulum sollicitudin maximus fermentum. Suspendisse a lorem quis ex' +
    ' dignissim auctor. Pellentesque non velit felis.';*/

  options: btnOptions = {
    type: btnType.DEFAULT,
    color: Colors.PRIMARY,
  };

  colors: Colors[] = [Colors.PRIMARY, Colors.SECONDARY];
  type: btnType[] = [
    btnType.DEFAULT,
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
