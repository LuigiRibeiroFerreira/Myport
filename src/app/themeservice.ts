import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private activeTheme: 'light-theme' | 'dark-theme' = 'light-theme';

  setActiveTheme(theme: 'light-theme' | 'dark-theme') {
    this.activeTheme = theme;
    document.body.className = theme;
  }

  getActiveTheme() {
    return this.activeTheme;
  }
}
