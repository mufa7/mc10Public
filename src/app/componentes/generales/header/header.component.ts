import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @ViewChild('myTopnav') myTopnav: ElementRef | undefined;

  isResponsive = false;

  isDarkThemeOn = signal(false);
  
  constructor (@Inject(PLATFORM_ID) private platformId: any){}

  // Listener para el evento de scroll
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.modificarHeader();
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const temaGuardado = localStorage.getItem('tema');
      if (temaGuardado === 'claro') {
        document.body.classList.add('claro');
        this.isDarkThemeOn.set(true);
      }
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('click', (event) => {
        if (this.myTopnav && !this.myTopnav.nativeElement.contains(event.target)) {
          this.isResponsive = false;
        }
      });
    }
    setInterval(() => {
      const logos = document.querySelectorAll('.img-logo');
  
      logos.forEach((logo) => {
        if (logo instanceof HTMLElement) {
          logo.style.animation = 'none'; // Reinicia la animación
          void logo.offsetWidth;        // Fuerza reflow
          logo.style.animation = 'flip 2s ease-in-out';
        }
      });
    }, 10000); // Cada 10 segundos
  }

  // Abrir menú
  abrirMenu(): void {
    this.isResponsive = !this.isResponsive;
    this.modificarHeader();
  }
  // Cerrar menú
  scrollTo(id:string) {
    this.isResponsive = false;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = '/';
      localStorage.setItem('url', id);
    }
  }

  cambiarTema() {
    document.body.classList.toggle('claro');
    const isDark = !this.isDarkThemeOn();
    this.isDarkThemeOn.set(isDark);
    localStorage.setItem('tema', isDark ? 'claro' : 'oscuro');
    this.modificarHeader();
  }

  modificarHeader(){
    const header = document.getElementById('myTopnav');
    const scrollPosition = window.scrollY; // Obtiene la posición del scroll

    if (header) {
      if (scrollPosition >= 0 && this.isResponsive == true) {
        if(this.isDarkThemeOn()){ 
          header.style.backgroundColor = '#D5DBDB';
        } else {
          header.style.backgroundColor = '#191a1f';
        }
      } else if (scrollPosition < 500 && this.isResponsive == false) {
        header.style.backgroundColor = 'transparent';
      } else if (scrollPosition > 500 && this.isResponsive == false) {
        console.log('Si entra');
        
        if(this.isDarkThemeOn()){ 
          header.style.backgroundColor = '#D5DBDB';
        } else {
          header.style.backgroundColor = '#191a1f';
        }
      }
      
    }
  }

}
