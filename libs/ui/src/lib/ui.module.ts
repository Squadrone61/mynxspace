import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';

const imp_exp = [ComponentsModule];

@NgModule({
  imports: [...imp_exp],
  exports: [...imp_exp],
})
export class UiModule {}
