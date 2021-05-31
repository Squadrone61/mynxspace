import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mynxspace-playground',
  templateUrl: './playground.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent {
  loremText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla ex, euismod sed aliquam molestie, aliquet nec nunc.' +
    ' Integer faucibus euismod ex, scelerisque suscipit orci cursus at. Aenean accumsan finibus magna in varius. Nulla cursus ' +
    'suscipit mauris eu dignissim. Maecenas sodales dui arcu, eu porta nisi luctus id. Maecenas in enim purus. Maecenas placerat'; /*+
    ' urna eget sem porta, sed dictum ligula sollicitudin. Curabitur et pharetra tortor. Phasellus id dolor tempus, dapibus ' +
    'velit ut, pretium purus. Vestibulum sollicitudin maximus fermentum. Suspendisse a lorem quis ex' +
    ' dignissim auctor. Pellentesque non velit felis.';*/
}
