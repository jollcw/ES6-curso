"use strict";

function registrarUsuario(nombre, pais, correo, tel) {
  return "Nom: ".concat(nombre, ", pa\xEDs: ").concat(pais, ", correo: ").concat(correo, ", tel: ").concat(tel);
}

console.log(registrarUsuario('Carlos', 'Mejico', 'carlos@gmail.com'));

function registrarUsuario2(nombre) {
  var pais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'No especificado';
  var correo = arguments.length > 2 ? arguments[2] : undefined;
  var tel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'No especificado';
  return "Nom: ".concat(nombre, ", pa\xEDs: ").concat(pais, ", correo: ").concat(correo, ", tel: ").concat(tel);
}

console.log(registrarUsuario2('Carlos', 'Mejico')); // *Si no hay parametro (en medi de los parametros a enviar) envia undefined

console.log(registrarUsuario2('Carlos', undefined, 'carlos@gmail.com')); // * Parametros Rest
//  El último parámetro de una función se puede prefijar con ..., lo que hará que todos los argumentos restantes (suministrados por el usuario) se coloquen dentro de un array

function parametrosRest(a, b) {
  console.log('Param a: ', a);
  console.log('Param b: ', b);

  for (var _len = arguments.length, varios = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    varios[_key - 2] = arguments[_key];
  }

  console.log('Param Rest: ', varios);
}

parametrosRest(1, 2, 3, 4, 5, 6);