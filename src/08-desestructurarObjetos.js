const usuario = {
    nombre: 'juan',
    correo: 'correo@correo.es',
    edat: 30,
    pais: 'Ìtalia',
    profesion: 'camarero'
}
// Antes de desestructurar
console.log('usuario.nombre :>> ', usuario.nombre);

// Desestructurando
let {nombre, correo} = usuario;

// Antes de desestructurar
console.log('nombre :>> ', nombre);
// --------------------------------------
const usuario2 = {
    nombre2: 'juan',
    correo2: 'correo@correo.es',
    edat2: 30,
    pais2: 'Ìtalia',
}
// Desestructurando
let {nombre2, profesion2 = 'estudiante'} = usuario2;

console.log('nombre2 :>> ', nombre2);
console.log('profesion2 :>> ', profesion2);
// ---------------------------------------
const mostrarInfo = ({nombre2, profesion2 = 'estudiante'}) => console.log(`${nombre2} es ${profesion2}`);
mostrarInfo(usuario2);