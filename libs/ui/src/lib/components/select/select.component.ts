import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-select',
  templateUrl: './select.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {}

@NgModule({
  declarations: [SelectComponent],
  imports: [CommonModule],
  exports: [SelectComponent],
})
export class SelectModule {}
