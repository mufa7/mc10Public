import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-politica-de-cookies',
  standalone: true,
  imports: [],
  templateUrl: './politica-de-cookies.component.html',
  styleUrl: './politica-de-cookies.component.scss'
})
export class PoliticaDeCookiesComponent {
  isBrowser: boolean;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {
      this.isBrowser = isPlatformBrowser(this.platformId);
  }

  resetearCookies(){
    if (this.isBrowser) {
      localStorage.removeItem('cookiesDecision');
      window.location.href = '/';
    }
  }
}
