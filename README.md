# MC10

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

ng serve --host 0.0.0.0 --port 4200

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Librerías externas

## EmailJs
npm i @emailjs/browser

## Subir Web al Hosting gratuito de Firebase

## Intalamos las herramientas de Firebase
npm install -g firebase-tools

## Nos logueamos con Firebase
firebase login

## Inicializamos Firebase
firebase init

✔ What do you want to use as your public directory? dist/mc10/browser
✔ Configure as a single-page app (rewrite all urls to /index.html)? No
✔ Set up automatic builds and deploys with GitHub? No
i  dist/mc10/browser/404.html is unchanged
✔ File dist/mc10/browser/index.html already exists. Overwrite? No

## Desplegamos la web a Firebase
firebase deploy --only hosting

## Archivo para la propiedad de Google Search Console
google16050da44010b05b.html

## Archivos para la indexación de Google
sitemap.xml
robots.txt

## Secuencia para una correcta subida
1 - Realizamos los cambios necesarios y subimos esos cambios al control de versiones si queremos ya
2 - ng build - Para la compilación del proyecto
3 - Copiamos los archivis de indexación de Google: sitemap y robots; y también agregamos el archivo de propiedad de Google
    google16050da44010b05b. Todo ello en /dist/mc10/browser
4 - firebase deploy para desplegar nuestra web en el Hosting Gratuito de Firebase.



## Licencia
Este proyecto se distribuye únicamente para visualización. No se permite su uso, copia, modificación ni distribución sin autorización expresa. Consulta el archivo LICENSE.txt para más detalles.
