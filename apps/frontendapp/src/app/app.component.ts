import { Component } from '@angular/core';
import { Theme, ThemeService } from './shared/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mynxspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  theme: Observable<string> = this.ts.theme;
  themeOptions = [Theme.OS, Theme.DARK, Theme.LIGHT];
  constructor(private ts: ThemeService) {}

  changeTheme(e) {
    this.ts.setTheme(e);
  }
}
