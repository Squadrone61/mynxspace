import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as atoms from './atoms';

const dec_exp = [atoms.ButtonComponent];

@NgModule({
  declarations: [...dec_exp],
  exports: [...dec_exp],
  imports: [CommonModule],
})
export class ComponentsModule {}
