import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cambios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cambios.component.html',
  styleUrl: './cambios.component.scss'
})
export class CambiosComponent {
  imagenes = [
    'cambio1.jpg', 'cambio2.jpg', 'cambio3.jpg',
    'cambio4.jpg', 'cambio5.jpg', 'cambio6.jpg',
    'cambio7.jpg', 'cambio8.jpg', 'cambio9.jpg',
    'cambio10.jpg', 'cambio11.jpg', 'cambio12.jpg'
  ];

  currentMobileIndex = 0;
  autoplayInterval: any;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    // Cambia de carta cada 3 segundos (3000 ms)
    this.autoplayInterval = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  prevImage() {
    this.currentMobileIndex = (this.currentMobileIndex - 1 + this.imagenes.length) % this.imagenes.length;
  }

  nextImage() {
    this.currentMobileIndex = (this.currentMobileIndex + 1) % this.imagenes.length;
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
