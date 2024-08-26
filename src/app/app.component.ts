import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './themeservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    const activeTheme = this.themeService.getActiveTheme();
    const newTheme = activeTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    this.themeService.setActiveTheme(newTheme);
  }
}