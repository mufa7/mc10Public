import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/home/about/about.component';
import { BannerComponent } from './componentes/home/banner/banner.component';
import { TestimoniosComponent } from './componentes/home/testimonios/testimonios.component';
import { CambiosComponent } from './componentes/home/cambios/cambios.component';
import { ServiciosComponent } from './componentes/home/servicios/servicios.component';
import { ContactoComponent } from './componentes/home/contacto/contacto.component';
import { PoliticaDeCookiesComponent } from './componentes/generales/politica-de-cookies/politica-de-cookies.component';
import { PoliticaDePrivacidadComponent } from './componentes/generales/politica-de-privacidad/politica-de-privacidad.component';
import { AvisoLegalComponent } from './componentes/generales/aviso-legal/aviso-legal.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, 
    {
        path: 'banner',
        component: BannerComponent
    }, 
    {
        path: 'contacto',
        component: ContactoComponent
    }
    , 
    {
        path: 'about',
        component: AboutComponent
    }
    , 
    {
        path: 'servicios',
        component: ServiciosComponent
    }
    , 
    {
        path: 'cambios',
        component: CambiosComponent
    }
    , 
    {
        path: 'testimonios',
        component: TestimoniosComponent
    }
    ,
    {
        path: 'politica-de-cookies',
        component: PoliticaDeCookiesComponent
    }
    ,
    {
        path: 'politica-de-privacidad',
        component: PoliticaDePrivacidadComponent
    }
    ,
    {
        path: 'aviso-legal',
        component: AvisoLegalComponent
    }
];
