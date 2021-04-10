import { Component } from '@angular/core';
import { btnOptions, btnType } from '@libs/ui';
import { SettingsComponent } from './shared/modules/settings/settings.component';
import { UiComponentService } from './shared/services/ui-component.service';
import { UiComponentHandler } from './shared/providers/ui-component.handler';

interface AppRoute {
  label: string;
  target: string;
}

@Component({
  selector: 'mynxspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  routeButtonOptions: Partial<btnOptions> = {
    type: btnType.PLAIN,
  };
  routes: AppRoute[] = [
    {
      label: 'playground',
      target: '/playground',
    },
    {
      label: 'route2',
      target: '/',
    },
    {
      label: 'me',
      target: '/about',
    },
  ];
  settings = false;

  constructor(private cs: UiComponentService) {}

  toggleSettings() {
    this.settings = !this.settings;
    if (this.settings) {
      this.cs.loadComponent(SettingsComponent);
    } else {
      this.cs.clearComponent();
    }
  }
}
