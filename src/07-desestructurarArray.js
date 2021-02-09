const persona = ['Carlos', 30, 'Italia', 'diseñador'];

const [nombre, edad, pais, empleo] = persona;
console.log('nombre :>> ', nombre);
console.log('pais :>> ', pais);

const persona2 = ['Carlos', 30, 'Italia', 'diseñador'];
// const persona2 = ['Carlos', 30, 'Italia'];

const [nombre2, , pais2, empleo2= 'no definido'] = persona2;
console.log('nombre2 :>> ', nombre2);
console.log('pais2 :>> ', pais2);
console.log('empleo2 :>> ', empleo2);

let persona3 = ['Carlos', 30, 'Italia'];
// const mostrarInfo = ([nombre2, , pais2, empleo2 = 'no definido'] = persona3) => console.log(nombre2, pais2, empleo2);
const mostrarInfo = ([nombre2, , pais2, empleo2 = 'no definido'] = p) => console.log(nombre2, pais2, empleo2);
mostrarInfo(persona3);

persona3 = ['Pedro', 30, 'francia', 'mecanico'];
mostrarInfo(persona3);