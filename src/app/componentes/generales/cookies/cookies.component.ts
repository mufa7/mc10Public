import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.scss'
})
export class CookiesComponent {
  mostrarBanner: boolean = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      const decision = localStorage.getItem('cookiesDecision');
      if (!decision) {
        this.mostrarBanner = true;
      } else if (decision === 'aceptadas') {
        this.cargarGoogleAnalytics();
      }
    }
  }

  aceptarCookies(): void {
    if (this.isBrowser) {
      localStorage.setItem('cookiesDecision', 'aceptadas');
      this.mostrarBanner = false;
      //his.cargarGoogleAnalytics();
    }
  }

  rechazarCookies(): void {
    if (this.isBrowser) {
      localStorage.setItem('cookiesDecision', 'rechazadas');
      this.mostrarBanner = false;
    }
  }

  private cargarGoogleAnalytics(): void {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-5REDDTRZYK';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-6H3BW6SLFW');
    `;
    document.head.appendChild(script2);
  }

}
