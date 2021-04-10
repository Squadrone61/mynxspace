import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme, ThemeService } from '../../services/theme.service';

@Component({
  selector: 'ui-settings',
  templateUrl: './settings.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  theme: Observable<string> = this.ts.theme;
  themeOptions = [Theme.OS, Theme.DARK, Theme.LIGHT];
  constructor(private ts: ThemeService) {}

  changeTheme(e) {
    this.ts.setTheme(e);
  }
}
