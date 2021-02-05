# ES6 Curso

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