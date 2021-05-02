import { Component } from '@angular/core';
import { SettingsComponent } from './shared/modules/settings/settings.component';
import { UiComponentService } from './shared/services/ui-component.service';
import { ThemeService } from './shared/services/theme.service';

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
