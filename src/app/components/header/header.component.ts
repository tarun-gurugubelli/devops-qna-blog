import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>(); // Emit event to toggle sidebar
  isDarkTheme: boolean = false;

  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme.subscribe((darkTheme) => {
      this.isDarkTheme = darkTheme;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}