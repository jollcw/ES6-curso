"use strict";

// * Con var se puede redeclarar variables
var nombre = 'jordi';
var nombre = 'Pepe';
console.log("nombre ".concat(nombre)); // ! ES6 con let no permite redeclarar variables

var pais = 'Mejico'; // let pais = 'España';

console.log("nombre ".concat(pais));