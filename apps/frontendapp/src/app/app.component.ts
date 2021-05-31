import { Component } from '@angular/core';
import { SettingsComponent } from './shared/modules/settings/settings.component';
import { UiComponentService } from './shared/services/ui-component.service';
import { ThemeService } from './shared/services/theme.service';
import { environment } from '../environments/environment';

interface AppRoute {
  label: string;
  target: string;
}

@Component({
  selector: 'ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UiComponentService],
})
export class AppComponent {
  devRoute: AppRoute[] = environment.production
    ? []
    : [
        {
          label: 'playground',
          target: '/playground',
        },
      ];
  routes: AppRoute[] = [
    ...this.devRoute,
    {
      label: 'main',
      target: '/',
    },
    {
      label: 'UI Components',
      target: '/ui-examples',
    },
    {
      label: 'shop3d',
      target: '/shop3d',
    },
  ];
  settings = false;

  constructor(private cs: UiComponentService, private ts: ThemeService) {
    ts.init();
  }

  toggleSettings() {
    this.settings = !this.settings;
    if (this.settings) {
      this.cs.loadComponent(SettingsComponent);
    } else {
      this.cs.clearComponent();
    }
  }
}
