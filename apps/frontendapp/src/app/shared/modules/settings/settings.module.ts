import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule, CardModule } from '@libs/ui';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, FormsModule, SharedModule, CardModule, ButtonModule],
  exports: [SettingsComponent],
})
export class SettingsModule {}
