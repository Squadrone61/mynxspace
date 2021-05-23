import { Component } from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as TWEEN from '@tweenjs/tween.js';

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

  /* moveCam(c, t, step: number) {
     const last = { x: c[0], y: c[1], z: c[2] };
     const next = { x: c[0], y: c[1], z: c[2] };

     this.selectedItem += step;

      const rotSpeed = 0.2;
     const x = this.camera.position.x,
       y = this.camera.position.y,
       z = this.camera.position.z;

     if (keyboard.pressed('left')) {
       this.camera.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
       this.camera.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed);
     } else if (keyboard.pressed('right')) {
       this.camera.position.x = x * Math.cos(rotSpeed) - z * Math.sin(rotSpeed);
       this.camera.position.z = z * Math.cos(rotSpeed) + x * Math.sin(rotSpeed);
     }

     this.camera.lookAt(scene.position);
   }*/
}
