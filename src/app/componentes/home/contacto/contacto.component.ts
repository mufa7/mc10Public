import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  contactForm: FormGroup;
  mensaje: string = '';

  cargando = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.minLength(9),
        Validators.maxLength(9)
      ]],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', [Validators.required, Validators.minLength(3)]],
      mensaje: ['', [Validators.required, Validators.minLength(5)]]
    });
  }


  enviarFormulario() {
    this.cargando = true;

    if(this.contactForm.valid) {
      const params = this.contactForm.value;

      emailjs.send('service_wy23vff', 'template_pkd5x4j', params, {
        publicKey: 'mrT6Ts2T8kefQe9JI'
      }).then(() => {
        this.cargando = false;
        this.mensaje = '¡Mensaje enviado correctamente!';
        this.contactForm.reset();
      }, (error) => {
        this.cargando = false;
        console.error('Error al enviar:', error);
        this.mensaje = 'Error al enviar. Intenta más tarde.';
      });
    }
  }
  estadoCampo(campo: string): string {
    const control = this.contactForm.get(campo);
    if (!control) return '';
    return control.invalid && control.touched ? 'invalido' :
            control.valid && control.touched ? 'valido' : '';
  }

  // verMapa(){
  //   window.open('https://www.openstreetmap.org/?mlat=38.065228&mlon=-3.315298#map=16/38.065228/-3.315298', '_blank');
  // }

  // mostrarSpinner(){
  //   this.cargando = true;
  //   setTimeout(() => {
  //     // Aquí iría tu lógica real, como un this.http.post(...)

  //     this.cargando = false;
  //   }, 2000);
  // }
}
