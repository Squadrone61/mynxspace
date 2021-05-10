import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shop3dComponent } from './shop-3d/shop-3d.component';

const routes: Routes = [
  {
    path: '',
    component: Shop3dComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shop3dRoutingModule {}
