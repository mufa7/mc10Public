import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  @ViewChild('aboutText') aboutTextRef!: ElementRef;
  hideArrow: boolean = false;

  ngAfterViewInit(): void {
    const container = this.aboutTextRef.nativeElement;
    const indicator = container.querySelector('.scroll-indicator');

    container.addEventListener('scroll', () => {
      if (container.scrollTop > 10) {
        indicator.style.opacity = '0';
      } else {
        indicator.style.opacity = '1';
      }
    });
  }

  
onScroll(): void {
  const scrollTop = this.aboutTextRef.nativeElement.scrollTop;
  this.hideArrow = scrollTop > 0;
}

  openZoom(src: string) {
    const absoluteUrl = `${window.location.origin}/${src}`;
    const zoomed = window.open('', '_blank');
    if (zoomed) {
      zoomed.document.title = 'Imagen ampliada';
  
      // Estilos
      const style = zoomed.document.createElement('style');
      style.textContent = `
        body {
          margin: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          overflow: hidden;
          position: relative;
          font-family: Arial, sans-serif;
        }
        img {
          width: 80%;
          height: 80%;
          object-fit: contain;
          z-index: 1;
          cursor: zoom-out;
        }
        .close-button {
          position: absolute;
          top: 40px;
          right: 40px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          font-size: 5em;
          cursor: pointer;
          z-index: 2;
          padding: 0.25em 0.5em;
          border-radius: 5px;
        }
        .close-button:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      `;
      zoomed.document.head.appendChild(style);
  
      // Imagen
      const img = zoomed.document.createElement('img');
      img.src = absoluteUrl;
      img.alt = 'Imagen ampliada';
  
      // Botón de cerrar
      const closeButton = zoomed.document.createElement('button');
      closeButton.textContent = '×';
      closeButton.className = 'close-button';
      closeButton.onclick = () => zoomed.close();
  
      // Añadir al documento
      zoomed.document.body.appendChild(closeButton);
      zoomed.document.body.appendChild(img);
  
      // Cerrar con "Esc"
      zoomed.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          zoomed.close();
        }
      });
  
      // Cerrar clic fuera de imagen
      zoomed.document.body.addEventListener('click', (event) => {
        if ((event.target as HTMLElement).tagName !== 'IMG') {
          zoomed.close();
        }
      });
    }
  }
}
