import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from "./banner/banner.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { ServiciosComponent } from "./servicios/servicios.component";
import { CambiosComponent } from "./cambios/cambios.component";
import { TestimoniosComponent } from "./testimonios/testimonios.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, BannerComponent, ContactoComponent, ServiciosComponent, CambiosComponent, TestimoniosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ngOnInit() {
    const element = document.getElementById('banner');
    console.log(element);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngAfterViewInit() {
    //Vemos si viene de laspáginas legales
    console.log('Estoy en el app component');
    
    const url = localStorage.getItem('url');
    console.log(url);
    if (url) {
      const element = document.getElementById(url);
      console.log(element);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      localStorage.removeItem('url');
    }
  }

}
