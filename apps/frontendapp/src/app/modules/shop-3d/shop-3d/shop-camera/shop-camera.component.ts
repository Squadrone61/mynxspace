import { Component, NgModule } from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as TWEEN from '@tweenjs/tween.js';
import { ThreeOrbitControlsModule } from '@angular-three/controls/orbit-controls';

@Component({
  selector: 'ui-shop-camera',
  template: `
    <ngt-orbit-controls
      (ready)="camReady($event)"
      (animateReady)="animateOrbit($event.animateObject)"
    ></ngt-orbit-controls>
  `,
})
export class ShopCameraComponent {
  camReady(c: OrbitControls) {
    c.enablePan = false;
    c.enableZoom = false;
    c.enableDamping = true;

    c.minPolarAngle = Math.PI * 0.45;
    c.maxPolarAngle = Math.PI * 0.45;
  }

  animateOrbit(c: OrbitControls) {
    c.update();
    TWEEN.update();
  }
}

@NgModule({
  declarations: [ShopCameraComponent],
  exports: [ShopCameraComponent],
  imports: [ThreeOrbitControlsModule],
})
export class ShopCameraModule {}
