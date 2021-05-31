import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiExamplesComponent } from './ui-examples/ui-examples.component';

const routes: Routes = [
  {
    path: '',
    component: UiExamplesComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiExamplesRoutingModule {}
