# Apendiendo Angular

Instalar Node.JS
-----------------
Necesitarás tener instalado la última (o más estable) versión de Node.JS. Si ya lo tienes instalado, omite este paso.
* [Descargar Node.JS](https://nodejs.org)

Instalar Angular
----------------
* Desde la consola de Windows => **npm install -g @angular/cli**
* Para corroborar que Angular haya sido correctamente instalado => ng --version

Comandos
--------
* **Crear un proyecto =>** ng new nombreProyecto
* **Crear un componente =>** ng g c nombreComponente
* **Probar el proyecto en un navegador =>** npm start

Agregar un componente al proyecto
---------------------------------
Dentro de la carpeta **app** se encuentra el archivo **app.componente.html** que es el que contendrá todos los componentes de nuestra app. Para poder agegar un componente hay que abrir dicho archivo y escribir el nombre del componente como si fuera una etiqueta HTML.
* < componente >< / componente >

Intalar AngularFire2 && Firebase
---------------------------------
* npm i angularfire2
* npm i firebase