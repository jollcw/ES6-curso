"use strict";

// * Con var se puede redeclarar variables
var nombre = 'jordi';
var nombre = 'Pepe';
console.log("nombre ".concat(nombre)); // ! ES6 con let no permite redeclarar variables

var pais = 'Mejico'; // let pais = 'España';

console.log("nombre ".concat(pais)); // -----------------------------------------------
// * dentro de una función ni var ni let ni const son accesibles dentro de una function   

function saluda() {
  var nombre2 = 'john';
  var apellido = 'Perez'; // return (`${nombre2} - ${apellido}`);

  return nombre2 + apellido;
}

console.log(saluda()); // console.log(nombre2);
// console.log(apellido);
// -----------------------------------------------
// * Let y const tienen un scope de tipo bloque

var edad = 18;

if (edad >= 18) {
  var esAdulto = true;
  var esAdulto2 = true;
  var esAdulto3 = true;
}

console.log(esAdulto); // console.log(esAdulto2);
// console.log(esAdulto3);
// -----------------------------------------------