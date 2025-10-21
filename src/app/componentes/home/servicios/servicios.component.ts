import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {
  servicios = [
    {
      titulo: 'PLANIFICACIÓN Y SEGUIMIENTO PERSONALIZADO',
      descripcion: 'Cada persona es única, y tu entrenamiento también debe serlo. Analizo tus objetivos, tu punto de partida y tus necesidades para diseñar un plan a medida, con seguimiento constante para ajustar cada fase según tu evolución. Tendrás mi acompañamiento cercano, resolviendo dudas y adaptando el ritmo para que nunca te sientas solo en el proceso.',
      imagen: '../../../../assets/images/servicios/completo.png',
    },
    {
      titulo: 'CROSSFIT: ENTRENAMIENTO FUNCIONAL',
      descripcion: 'Sesiones intensas, dinámicas y adaptadas a todos los niveles. Combina fuerza, resistencia y velocidad en un entrenamiento que te reta en cada repetición. ¿Listo para superarte? ¡Activa tu mejor versión!',
      imagen: '../../../../assets/images/servicios/crossfit.png',
    },
    {
      titulo: 'CLASES DE PILATES: FUERZA Y FLEXIBILIDAD',
      descripcion: 'Descubre los beneficios del Pilates con clases diseñadas para mejorar tu postura, fortalecer la zona abdominal y lumbar, y aumentar tu flexibilidad. Es una disciplina suave pero muy efectiva, ideal tanto si estás empezando como si quieres complementar otros entrenamientos. Mejora tu equilibrio, gana control corporal y conecta cuerpo y mente en cada sesión.',
      imagen: '../../../../assets/images/servicios/pilates.png',
    },
    {
      titulo: 'MUSCULACIÓN: POTENCIA Y DEFINICIÓN',
      descripcion: 'Entrena de forma segura y eficaz para ganar masa muscular, tonificar tu cuerpo y aumentar tu fuerza. Ya sea que busques mejorar tu rendimiento físico o lograr una apariencia más definida, diseñaremos un plan adaptado a tu nivel y objetivos. Control, técnica y progresión constante, siempre con mi guía.',
      imagen: '../../../../assets/images/servicios/musculacion.png',
    },
    {
      titulo: 'GAP: GLÚTEOS, ADBODMEN Y PIERNAS',
      descripcion: 'El entrenamiento GAP es una actividad física que se enfoca en trabajar tres áreas específicas del cuerpo: glúteos, abdomen y piernas. Este tipo de entrenamiento suele realizarse en clases colectivas o en casa, y se caracteriza por incluir ejercicios de fuerza y tonificación para estas zonas.',
      imagen: '../../../../assets/images/servicios/gap.png',
    },
    {
      titulo: 'ORIENTACIÓN NUTRICIONAL PARA ALCANZAR TUS METAS',
      descripcion: 'La alimentación es clave para ver resultados. Te ofrezco una guía nutricional básica y adaptada a tu estilo de vida y objetivos, complementando tu entrenamiento para maximizar los beneficios. Sin dietas estrictas ni complicaciones: solo hábitos saludables que se integran fácilmente en tu día a día.',
      imagen: '../../../../assets/images/servicios/nutricion.png',
    }
    // Añade más servicios aquí
  ];

  currentIndex = 0;
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
      this.next();
    }, 3000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.servicios.length) % this.servicios.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.servicios.length;
  }

  // Para el efecto de 3 elementos (tarjeta izquierda, central y derecha) en pantalla ancha
  getVisibleCards(): any[] {
    const length = this.servicios.length;
    const left = this.servicios[(this.currentIndex - 1 + length) % length];
    const center = this.servicios[this.currentIndex];
    const right = this.servicios[(this.currentIndex + 1) % length];
    return [left, center, right];
  }

  openZoom(src: string) {
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
      img.src = `${window.location.origin}/${src}`;
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
