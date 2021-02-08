function registrarUsuario(nombre, pais, correo, tel) {
    return `Nom: ${nombre}, país: ${pais}, correo: ${correo}, tel: ${tel}`
}
console.log(registrarUsuario('Carlos', 'Mejico','carlos@gmail.com'));

function registrarUsuario2(nombre, pais = 'No especificado', correo, tel = 'No especificado') {
    return `Nom: ${nombre}, país: ${pais}, correo: ${correo}, tel: ${tel}`
}
console.log(registrarUsuario2('Carlos', 'Mejico'));

// *Si no hay parametro (en medi de los parametros a enviar) envia undefined
console.log(registrarUsuario2('Carlos', undefined,'carlos@gmail.com'));

// * Parametros Rest
//  El último parámetro de una función se puede prefijar con ..., lo que hará que todos los argumentos restantes (suministrados por el usuario) se coloquen dentro de un array
function parametrosRest(a, b, ...varios) {
    console.log('Param a: ', a);
    console.log('Param b: ', b);
    console.log('Param Rest: ', varios);
}

parametrosRest(1, 2, 3, 4, 5, 6);