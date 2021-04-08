import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  OS = 'os',
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _theme = new Subject<string>();
  public theme = this._theme.asObservable();

  private get lsTheme() {
    return localStorage.getItem('theme');
  }
  constructor() {
    this.setTheme((this.lsTheme as Theme) || Theme.OS);
  }

  setTheme(mode: Theme) {
    localStorage.setItem('theme', mode);
    this._theme.next(mode);
    this.setHeaders();
  }

  setHeaders() {
    const theme = this.lsTheme;
    if (
      theme === 'dark' ||
      (theme === 'os' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
