import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme, ThemeService } from '../../services/theme.service';

@Component({
  selector: 'ui-settings',
  templateUrl: './settings.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  theme: Observable<Theme> = this.ts.theme;
  useOS: boolean = this.ts.themeSnapshot === Theme.OS;

  constructor(private ts: ThemeService) {}

  toggleTheme() {
    this.ts.setTheme(
      this.ts.themeSnapshot === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  }

  useOSTheme(e: boolean) {
    if (e) {
      this.ts.setTheme(Theme.OS);
    }
  }
}
