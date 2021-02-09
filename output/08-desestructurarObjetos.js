"use strict";

var usuario = {
  nombre: 'juan',
  correo: 'correo@correo.es',
  edat: 30,
  pais: 'Ìtalia',
  profesion: 'camarero'
}; // Antes de desestructurar

console.log('usuario.nombre :>> ', usuario.nombre); // Desestructurando

var nombre = usuario.nombre,
    correo = usuario.correo; // Antes de desestructurar

console.log('nombre :>> ', nombre); // --------------------------------------

var usuario2 = {
  nombre2: 'juan',
  correo2: 'correo@correo.es',
  edat2: 30,
  pais2: 'Ìtalia'
}; // Desestructurando

var nombre2 = usuario2.nombre2,
    _usuario2$profesion = usuario2.profesion2,
    profesion2 = _usuario2$profesion === void 0 ? 'estudiante' : _usuario2$profesion;
console.log('nombre2 :>> ', nombre2);
console.log('profesion2 :>> ', profesion2); // ---------------------------------------

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre2 = _ref.nombre2,
      _ref$profesion = _ref.profesion2,
      profesion2 = _ref$profesion === void 0 ? 'estudiante' : _ref$profesion;
  return console.log("".concat(nombre2, " es ").concat(profesion2));
};

mostrarInfo(usuario2);