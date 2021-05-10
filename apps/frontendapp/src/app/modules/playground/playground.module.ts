import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground/playground.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { PatternComponent } from './playground/pattern.component';
import { ButtonModule, CardModule, InputModule } from '@libs/ui';

@NgModule({
  declarations: [PlaygroundComponent, PatternComponent],
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    SharedModule,

    ButtonModule,
    CardModule,
    InputModule,
  ],
})
export class PlaygroundModule {}
