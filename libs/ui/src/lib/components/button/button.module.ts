import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, SvgIconsModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
