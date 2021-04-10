import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentContainerDirective } from '../directives/component-container.directive';

const modules = [FormsModule];

const _directives = [ComponentContainerDirective];

@NgModule({
  declarations: [..._directives],
  imports: [CommonModule, ...modules],
  exports: [...modules, ..._directives],
})
export class SharedModule {}
