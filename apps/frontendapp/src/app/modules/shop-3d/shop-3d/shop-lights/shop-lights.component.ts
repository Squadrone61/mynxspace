import {
  Component,
  ChangeDetectionStrategy,
  Input,
  NgModule,
} from '@angular/core';
import { SpotLight } from 'three';
import * as THREE from 'three';
import { AnimationReady } from '@angular-three/core/lib/typings';
import { ShopItem } from '../shop-item/shop-item';
import { ThreeSpotLightModule } from '@angular-three/core/lights';
import { ThreeCoreModule } from '@angular-three/core';

@Component({
  selector: 'ui-shop-spot',
  template: `
    <ngt-spot-light
      [args]="args"
      [castShadow]="true"
      (ready)="spotCreated($event)"
      (animateReady)="spotAnimate($event)"
    ></ngt-spot-light>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopLightsComponent {
  @Input()
  args: ConstructorParameters<typeof SpotLight>;
  @Input()
  item: ShopItem;

  spotCreated(s: THREE.SpotLight) {
    s.castShadow = true;
    (s.parent as THREE.Scene).add(s.target);
    /*const sh = new THREE.SpotLightHelper(s);
    this.scene.add(sh);*/
  }

  spotAnimate({ animateObject }: AnimationReady<THREE.SpotLight>) {
    if (this.item) {
      const c = this.item.cam;
      animateObject.position.set(c[0], c[1] + 5, c[2]);
      animateObject.target.position.x = this.item.position[0];
      animateObject.target.position.z = this.item.position[2];
    }
  }
}

@NgModule({
  declarations: [ShopLightsComponent],
  exports: [ShopLightsComponent],
  imports: [ThreeCoreModule, ThreeSpotLightModule],
})
export class ShopLightsModule {}
