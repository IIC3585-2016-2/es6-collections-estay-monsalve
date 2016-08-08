'use strict';

const mascotas = {
  '🐶': {
    name: 'oblina',
    edad: 6,
  },
  '🐱': {
    name: 'juanita',
    edad: 1,
  },
  '🐦': {
    name: 'cata',
    edad: 1,
  },
  [Symbol.iterator]() {
    const keys = Object.keys(this);
    let index = -1;
    return {
      next: () => {
        index += 1;
        return {
          value: this[keys[index]],
          done: index === keys.length,
        };
      }
    }
  }
};

console.log(mascotas);

for (let a of mascotas) {
  console.log(a);
}
