import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule, CardModule } from '@libs/ui';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,

    ButtonModule,
    CardModule,
  ],
})
export class MainModule {}
