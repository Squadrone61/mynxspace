import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Shop3dRoutingModule } from './shop-3d-routing.module';
import { Shop3dComponent } from './shop-3d/shop-3d.component';
import { ThreeCoreModule } from '@angular-three/core';
import { ThreeMeshModule } from '@angular-three/core/meshes';
import { ThreePlaneBufferGeometryModule } from '@angular-three/core/geometries';
import { ThreeMeshPhongMaterialModule } from '@angular-three/core/materials';
import { ThreeAxesHelperModule } from '@angular-three/core/helpers';
import { ButtonModule } from '@libs/ui';
import { ShopItemModule } from './shop-3d/shop-item/shop-item.component';
import { ShopCameraModule } from './shop-3d/shop-camera/shop-camera.component';
import { ThreeAmbientLightModule } from '@angular-three/core/lights';
import { ShopLightsModule } from './shop-3d/shop-lights/shop-lights.component';

@NgModule({
  declarations: [Shop3dComponent],
  imports: [
    CommonModule,
    Shop3dRoutingModule,
    ButtonModule,

    ShopItemModule,
    ShopCameraModule,
    ShopLightsModule,

    ThreeCoreModule,
    ThreeMeshModule,
    ThreeAxesHelperModule,
    ThreeAmbientLightModule,
    ThreePlaneBufferGeometryModule,
    ThreeMeshPhongMaterialModule,
  ],
})
export class Shop3dModule {}
