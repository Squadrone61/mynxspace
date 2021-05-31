import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiExamplesComponent } from './ui-examples/ui-examples.component';
import {
  ButtonModule,
  CardModule,
  DropdownModule,
  InputModule,
} from '@libs/ui';
import { UiExamplesRoutingModule } from './ui-examples-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UiExamplesComponent],
  imports: [
    UiExamplesRoutingModule,
    CommonModule,
    HttpClientModule,

    CardModule,
    ButtonModule,
    DropdownModule,
    InputModule,
    ReactiveFormsModule,
  ],
})
export class UiExamplesModule {}
