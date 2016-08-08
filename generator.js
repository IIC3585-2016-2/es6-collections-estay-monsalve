'use strict';

function* foo(x){
  let a = yield (x + 1);
  let b = yield(2 * a);
  return b;
}
// Un generador no se ejecuta cuando se declara.

var generator_test = foo(1);
// Ingreso el valor 1 al generador.

console.log(generator_test.next()) // { value: 2, done: false }
// El generador ejecuta (x + 1), retorna el resultado y se detiene.
console.log(generator_test.next(3)) // { value: 6, done: false }
// Se ingresa el valor 3 en a, se ejecuta 2 * a, se retorna el resultado y se detiene.
console.log(generator_test.next(4)) // { value: 4, done: true }
// Se ingresa el valor 3 en b, se devuelve el resultado de b, y la condición done cambia a true, porque se ejecutó el generador completamente

let mascota = {
  nombre: 'oblina',
  edad: 6,
  foto: '🐶',
}

mascota[Symbol.iterator] = function* () {
  yield this.nombre;
  yield this.edad;
  yield this.foto;
}

for(let propiedad of mascota){
  console.log(propiedad);
}

class Perro{
  constructor(nombre, edad, foto){
    this.nombre = nombre;
    this.edad = edad;
    this.foto = foto;
  }
  *[Symbol.iterator](){
    yield this.nombre;
    yield this.edad;
    yield this.foto;
  }
}

let perro = new Perro('oblina', 6, '🐶');

for(let propiedad of perro){
  console.log(propiedad);
}

var propiedades_perro = [...perro];

console.log(propiedades_perro);
