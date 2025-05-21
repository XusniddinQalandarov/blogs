import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoService, TranslocoModule } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TranslocoModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private translocoService = inject(TranslocoService);
  availableLangs: string[] | readonly string[];
  activeLang: string;
  isSidebarOpen = false;

  constructor() {
    this.availableLangs = this.translocoService.getAvailableLangs() as string[];
    this.activeLang = this.translocoService.getActiveLang();
  }

  changeLang(lang: string) {
    this.translocoService.setActiveLang(lang);
    this.activeLang = lang;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
