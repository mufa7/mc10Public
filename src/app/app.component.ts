import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/generales/header/header.component';
import { FooterComponent } from './componentes/generales/footer/footer.component';

import * as AOS from 'aos';
import { CookiesComponent } from './componentes/generales/cookies/cookies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CookiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mc10';

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }
  ngOnInit() {
    if (this.platformId === 'browser') {
      AOS.init();
      window.addEventListener('load', AOS.refresh);
      window.scrollTo(0, 0);
    }
  }
}
