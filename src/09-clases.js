class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarSaludo(mensaje) {
        return '<hr />' + mensaje;
    }

    mostrarInfo() {
        return `
            <hr />
            Nombre: ${this.nombre}<br />
            edad: ${this.edad}
        `;
    }
}
const resultado = document.getElementById('resultado');

const carlos = new Usuario('Carlos', 23);
const pedro = new Usuario('Pedro', 19);
// resultado.innerHTML = carlos.nombre;

resultado.innerHTML += carlos.mostrarSaludo('hola');
resultado.innerHTML += carlos.mostrarInfo();
resultado.insertAdjacentHTML('beforeend', carlos.mostrarInfo());

resultado.innerHTML += pedro.mostrarSaludo('hola');
resultado.innerHTML += pedro.mostrarInfo();
resultado.insertAdjacentHTML('beforeend', pedro.mostrarInfo());
resultado.insertAdjacentHTML('beforeend', pedro.mostrarInfo());


class Estudiante extends Usuario {
    constructor(nombre, edad, carrera) {
        super(nombre, edad);
        this.carrera = carrera;
    }
    mostrarInfo() {
        return `
            <hr />
            Nombre: ${this.nombre}<br />
            edad: ${this.edad}<br />
            carrera: ${this.carrera}
        `;
    }
}

const eduardo = new Estudiante('Eduardo', 26, 'Ingeniero')
resultado.insertAdjacentHTML('beforeend', eduardo.mostrarSaludo('hola'));
resultado.insertAdjacentHTML('beforeend', eduardo.mostrarInfo());