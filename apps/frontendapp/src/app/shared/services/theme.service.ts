import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  OS = 'os',
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _theme = new Subject<Theme>();
  public theme = this._theme.asObservable();
  public themeSnapshot: Theme;

  private get lsTheme() {
    return localStorage.getItem('theme');
  }

  constructor(private oc: OverlayContainer) {}

  init() {
    this.setTheme((this.lsTheme as Theme) || Theme.OS);

    const occ = this.oc.getContainerElement().classList;
    occ.add('!bg-opacity-0');
  }

  //TODO: should fire setTheme on app_init
  setTheme(mode: Theme) {
    localStorage.setItem('theme', mode);
    this._theme.next(mode);
    this.themeSnapshot = mode;
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
