# ES6 Curso

## Instalación
* instalar package.json i las dependenccias
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
```
 "presets": ["@babel/preset-env"]
 ```
 * Arancar para probar
 ```
 npm run build
 ```