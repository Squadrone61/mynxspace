import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@libs/ui';
import { FormsModule } from '@angular/forms';

const imp_exp = [FormsModule, UiModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...imp_exp],
  exports: [...imp_exp],
})
export class SharedModule {}
