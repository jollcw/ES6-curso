"use strict";

var nombres = ['carlos', 'Juan', 'Manuel', 'Pedro'];
var numCaracteres = nombres.map(function (nombre) {
  console.log("".concat(nombre, " tiene ").concat(nombre.length, " letras"));
});
var numCaracteres2 = nombres.map(function (nombre) {
  console.log("".concat(nombre, " tiene ").concat(nombre.length, " letras"));
});
var numCaracteres3 = nombres.map(function (nombre) {
  return console.log("".concat(nombre, " tiene ").concat(nombre.length, " letras"));
});