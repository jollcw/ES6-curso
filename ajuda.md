# ES6 Curso

## Lecciones
https://www.youtube.com/watch?v=LWiMWZ9-cdw&list=PLhSj3UTs2_yX_ct0OfHrmMwKL8wpz-N2j&index=1
* 1 2:19 Curso de ES6.- Que Es ECMASCRIPT EN 2 MINUTOS.

2 10:01 Curso de ES6 1.- Descargando las Herramientas Vamos a Utilizar

3 16:53 Curso de ES6 2.- Como Compilar Código ES6 a Javascript con Babel

16:52 Curso de ES6 3.- Nuevas Formas de Declarar Variables

5 7:03 Curso de ES6 4.- Template Strings

6 11:04 Curso de ES6 5.- Funciones de Tipo Flecha

7 6:43 Curso de ES6 6.- Parámetros por Defecto

8 13:49 Curso de ES6 7.- Destructuración de Arreglos

9 9:23 Curso de ES6 8.- Destructurar Objetos

10 26:20 Curso de ES6 9.- Classes y Herencia

11 5:43 Curso de ES6 10.- Nuevas Formas para Trabajar con Objetos

12 7:16 Curso de ES6 11.- Parametros Rest y Spread

13 10:25 Curso de ES6 12.- Promesas

14 13:02 Curso de ES6 13.- Nuevos Métodos para Cadenas de Texto y Arreglos

15 16:15 Curso de ES6 14.- Instalando y Configurando Webpack con Babel

16 21:13 Curso de ES6 15.- Módulos


## Instalación
* instalar package.json i las dependenccias  
https://babeljs.io/setup#installation
```
npm init
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```
* modificar el package.json  
compilar todo el dir: src al dir: output y seguir escuchando cualquier cambio
```
"build": "babel src -d output --watch",
```
* crear el babelrc y cofiguración para que compile  
https://babeljs.io/setup#installation
```
 "presets": ["@babel/preset-env"]
 ```
 * Arancar para probar
 ```
 npm run build
 ```