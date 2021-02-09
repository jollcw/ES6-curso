"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var persona = ['Carlos', 30, 'Italia', 'diseñador'];
var nombre = persona[0],
    edad = persona[1],
    pais = persona[2],
    empleo = persona[3];
console.log('nombre :>> ', nombre);
console.log('pais :>> ', pais);
var persona2 = ['Carlos', 30, 'Italia', 'diseñador']; // const persona2 = ['Carlos', 30, 'Italia'];

var nombre2 = persona2[0],
    pais2 = persona2[2],
    _persona2$ = persona2[3],
    empleo2 = _persona2$ === void 0 ? 'no definido' : _persona2$;
console.log('nombre2 :>> ', nombre2);
console.log('pais2 :>> ', pais2);
console.log('empleo2 :>> ', empleo2);
var persona3 = ['Carlos', 30, 'Italia']; // const mostrarInfo = ([nombre2, , pais2, empleo2 = 'no definido'] = persona3) => console.log(nombre2, pais2, empleo2);

var mostrarInfo = function mostrarInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : p,
      _ref2 = _slicedToArray(_ref, 4),
      nombre2 = _ref2[0],
      pais2 = _ref2[2],
      _ref2$ = _ref2[3],
      empleo2 = _ref2$ === void 0 ? 'no definido' : _ref2$;

  return console.log(nombre2, pais2, empleo2);
};

mostrarInfo(persona3);
persona3 = ['Pedro', 30, 'francia', 'mecanico'];
mostrarInfo(persona3);