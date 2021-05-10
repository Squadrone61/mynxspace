import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentContainerDirective } from '../directives/component-container.directive';
import { SvgIconsModule } from '@ngneat/svg-icon';

const modules = [FormsModule, ReactiveFormsModule, SvgIconsModule];

const _directives = [ComponentContainerDirective];

@NgModule({
  declarations: [..._directives],
  imports: [CommonModule, ...modules],
  exports: [...modules, ..._directives],
})
export class SharedModule {}
