import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@libs/ui';

const imp_exp = [UiModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...imp_exp],
  exports: [...imp_exp],
})
export class SharedModule {}
