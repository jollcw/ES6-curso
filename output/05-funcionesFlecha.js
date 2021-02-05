const nombres = ['carlos', 'Juan', 'Manuel', 'Pedro'];
const numCaracteres = nombres.map(function (nombre) {
  console.log(`${nombre} tiene ${nombre.length} letras`);
});
const numCaracteres2 = nombres.map(nombre => {
  console.log(`${nombre} tiene ${nombre.length} letras`);
});
const numCaracteres3 = nombres.map(nombre => console.log(`${nombre} tiene ${nombre.length} letras`));