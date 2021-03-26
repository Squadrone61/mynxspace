import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground/playground.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [CommonModule, PlaygroundRoutingModule, SharedModule],
})
export class PlaygroundModule {}
