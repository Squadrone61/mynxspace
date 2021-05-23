import { CameraOptions, ThreeVector3 } from '@angular-three/core/lib/typings';
import { Vector3 } from 'three';

export declare type ShopItem = Partial<{
  position: ThreeVector3;
  scale: Vector3;
  lookAt: Vector3;
  cam: number[];
  params: any;
  url: string;
}>;

export const camOptions: CameraOptions = {
  position: [0, 0, 10],
  fov: 75,
};

export const mockItems: ShopItem[] = [
  {
    position: [0, 0, 5],
    scale: new Vector3(1, 1, 1),
    lookAt: new Vector3(-3, 0, 6),
    cam: [0, 0, 10],
    url: './assets/models/sportscar.glb',
  },
  {
    position: [5, 0, 0],
    scale: new Vector3(0.5, 0.5, 0.5),
    lookAt: new Vector3(6, 0, 3),
    cam: [10, 0, 0],
    url: './assets/models/rocket.glb',
  },
  {
    position: [0, 0, -5],
    scale: new Vector3(0.5, 0.5, 0.5),
    lookAt: new Vector3(3, 0, -6),
    cam: [0, 0, -10],
    url: './assets/models/tank.glb',
  },
  {
    position: [-5, 0, 0],
    scale: new Vector3(1, 1, 1),
    lookAt: new Vector3(-6, 0, -3),
    cam: [-10, 0, 0],
    url: './assets/models/sportscar.glb',
  },
];
