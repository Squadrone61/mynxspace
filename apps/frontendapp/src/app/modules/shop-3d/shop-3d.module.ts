import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Shop3dRoutingModule } from './shop-3d-routing.module';
import { Shop3dComponent } from './shop-3d/shop-3d.component';


@NgModule({
  declarations: [
    Shop3dComponent
  ],
  imports: [
    CommonModule,
    Shop3dRoutingModule
  ]
})
export class Shop3dModule { }
