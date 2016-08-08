# Colecciones

## Iteradores
Un *iterador* es un objeto que provee un método `next()` que retorna dos propiedades: `done` y `value`, donde `value` representa el siguiente item en la colección.

*String*, *Array*, *TypedArray*, *Map* y *Set* son iterables por defecto, mientras que un *Object* no lo es. Para entender mejor los iteradores, podemos hacer un *Object* iterable, implementando  `[Symbol.iterator]` como una función:

```javascript
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
```
## Set
Colecciones de [tipos válidos de es6](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types), donde cada valor distinto puede aparecer una única vez. Podemos crear un *Set* vacío o desde un iterable:

```javascript
let fruits = new Set();
let food = new Set("🌽🍯🧀🍅");
```

Es posible obtener eficientemente el tamaño de un *Set* ya que se almacena como una *property*:

```javascript
food.size;
// > 4
```

El método `.has(value)` nos permite verificar la existencia de *value* en el set:
```javascript
food.has('🧀');
// > true
food.has('🍫');
// > false
```

Para manipular un *Set*, se tienen los métodos `.add(value)`, `.clear()` y `.delete(value)`:
* `.add(value)`:


```javascript
fruits.add('🍌')
// > Set {'🍌' }
fruits.add('🍌').add('🍒').add('🍑').add('🍍')
// > Set { '🍌', '🍒', '🍑', '🍍' }
fruits.delete('🍌')
// > true
fruits.delete('🍌')
// > false
fruits.clear()
// > undefined
```
* `.add(value)` retorna el *Set* luego de insertar *value* en él
* `.clear()` retorna *undefined* luego de eliminar todas las entradas
* `.delete(value)` retorna el valor que `.has(value)` habría retornado previamente, luego de eliminar *value* del *Set* si estaba presente.

Podemos obtener iteradores desde un *Set* con los métodos:
```javascript
fruits.entries()
// > SetIterator { [ '🍒', '🍒' ], [ '🍑', '🍑' ], [ '🍍', '🍍' ] }
fruits.keys()
// > SetIterator { '🍒', '🍑', '🍍' }
fruits.values()
// > SetIterator { '🍒', '🍑', '🍍' }
```

Será posible entonces utilizar *for of* para iterar sobre un set:
```javascript
for (let fruit of fruits) {}
for (let fruit of fruits.keys()) {} //idéntico a lo anterior
for (let [key, value] of fruits.entries()) {}
```

es6 no implementa los *array helpers* para *Sets* y *Maps*, estos son `.map()`, `.filter()`, `.some()`, `.every()`.
Además para *Sets* sería útil poder ejecutar métodos de intersección y unión, pero estos no están implementados.
