import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import * as THREE from 'three';
import { CameraOptions } from '@angular-three/core';
import { camOptions, mockItems, ShopItem } from './shop-item/shop-item';
import * as TWEEN from '@tweenjs/tween.js';
import { Color, SpotLight } from 'three';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ui-shop-threed',
  templateUrl: './shop-3d.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Shop3dComponent implements AfterViewInit {
  dev = !environment.production;
  halfPi = Math.PI / 2;

  cameraOptions: CameraOptions = camOptions;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;

  items: ShopItem[] = mockItems;
  selectedItem: ShopItem;

  spotOptions: ConstructorParameters<typeof SpotLight> = [
    new Color(255, 255, 255),
    0.005,
    100,
    Math.PI / 8,
    1,
    2,
  ];

  sceneCreated({ camera, scene }) {
    this.camera = camera;
    this.scene = scene;
  }

  itemsLoaded() {
    this.itemSelected(this.items[0]);
  }

  itemSelected(item: ShopItem) {
    const cp = item.cam;
    this.selectedItem = item;
    const cur = this.camera.position;
    new TWEEN.Tween({ x: cur.x, z: cur.z })
      .to({ x: cp[0], z: cp[2] })
      .easing(TWEEN.Easing.Exponential.InOut)
      .onUpdate(({ x, z }) => {
        this.camera.position.x = x;
        this.camera.position.z = z;
      })
      .start();
  }

  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }
}
