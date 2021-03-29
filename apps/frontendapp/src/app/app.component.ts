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
  model;
  constructor(private ts: ThemeService) {}

  changeTheme(e) {
    this.ts.setTheme(e ? Theme.DARK : Theme.LIGHT);
  }
}
