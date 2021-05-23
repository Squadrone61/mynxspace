import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Shop3dRoutingModule } from './shop-3d-routing.module';
import { Shop3dComponent } from './shop-3d/shop-3d.component';
import { ThreeCoreModule } from '@angular-three/core';
import { ThreeMeshModule } from '@angular-three/core/meshes';
import {
  ThreeBoxBufferGeometryModule,
  ThreePlaneBufferGeometryModule,
} from '@angular-three/core/geometries';
import {
  ThreeMeshBasicMaterialModule,
  ThreeMeshNormalMaterialModule,
  ThreeMeshPhongMaterialModule,
  ThreeMeshStandardMaterialModule,
} from '@angular-three/core/materials';
import { ThreeAxesHelperModule } from '@angular-three/core/helpers';
import { ThreeOrbitControlsModule } from '@angular-three/controls/orbit-controls';
import { ButtonModule } from '@libs/ui';
import { ShopItemComponent } from './shop-3d/shop-item/shop-item.component';
import { ThreeGroupModule } from '@angular-three/core/group';
import { ShopCameraComponent } from './shop-3d/shop-camera/shop-camera.component';
import {
  ThreeAmbientLightModule,
  ThreeSpotLightModule,
} from '@angular-three/core/lights';
import { ShopLightsComponent } from './shop-3d/shop-lights/shop-lights.component';

@NgModule({
  declarations: [
    Shop3dComponent,
    ShopItemComponent,
    ShopCameraComponent,
    ShopLightsComponent,
  ],
  imports: [
    CommonModule,
    Shop3dRoutingModule,
    ButtonModule,

    ThreeCoreModule,
    ThreeMeshModule,
    ThreeBoxBufferGeometryModule,
    ThreeMeshBasicMaterialModule,
    ThreeMeshNormalMaterialModule,
    ThreeAxesHelperModule,
    ThreeOrbitControlsModule,
    ThreeGroupModule,
    ThreeMeshStandardMaterialModule,
    ThreeAmbientLightModule,
    ThreeSpotLightModule,
    ThreePlaneBufferGeometryModule,
    ThreeMeshPhongMaterialModule,
  ],
})
export class Shop3dModule {}
