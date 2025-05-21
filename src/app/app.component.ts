import { Component, ElementRef, HostListener, inject } from '@angular/core';
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
  title = 'blogs';
  private translocoService = inject(TranslocoService);
  availableLangs: string[] | readonly string[];
  activeLang: string;
  isSidebarOpen = false;
  isLangDropdownOpen = false;

  constructor(private elementRef: ElementRef) {
    this.availableLangs = this.translocoService.getAvailableLangs() as string[];
    this.activeLang = this.translocoService.getActiveLang();
    this.checkInitialSidebarState();
  }

  changeLang(lang: string) {
    this.translocoService.setActiveLang(lang);
    this.activeLang = lang;
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (
      this.isLangDropdownOpen &&
      !this.elementRef.nativeElement
        .querySelector('.language-dropdown-container')
        .contains(event.target)
    ) {
      this.isLangDropdownOpen = false;
    }
  }
  private checkInitialSidebarState() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 768) {
      }
    }
  }

  isMobileView(): boolean {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return true;
  }
  selectLang(lang: string) {
    this.translocoService.setActiveLang(lang);
    this.activeLang = lang;
    this.isLangDropdownOpen = false;
  }
  toggleLangDropdown() {
    this.isLangDropdownOpen = !this.isLangDropdownOpen;
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
