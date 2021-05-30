import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/modules/shared.module';
import { IconsModule } from './shared/modules/icons.module';
import { SettingsModule } from './shared/modules/settings/settings.module';
import { UiComponentHandler } from './shared/providers/ui-component.handler';
import { ButtonModule, CardModule, DropdownModule } from '@libs/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,

    CardModule,
    ButtonModule,
    DropdownModule,

    IconsModule,
    SettingsModule,
  ],
  providers: [
    {
      provide: 'component-creator-service',
      useValue: UiComponentHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
