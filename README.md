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
## Map
Colección de pares *key-value* de [tipos válidos de es6](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types). Un *Object* es también una colección de pares *key-value*, pero este sólo puede tener como llaves *Strings* y *Symbols*. Además se diferencian en la forma de encontrar el tamaño de la colección, ya que *Map* permite obtenerlo fácilmente, mientras que será necesario conseguirlo manualmente desde un objeto.

Es posible crear un *Map* vacío o desde una colección de pares `[key, value]`:
```javascript
let animals = new Map();
let insects = new Map([["snail","🐌"], ["bee","🐝"]]);
```

## Set
Colección de [tipos válidos de es6](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types), donde cada valor distinto puede aparecer una única vez. Podemos crear un *Set* vacío o desde un iterable:

```javascript
let fruits = new Set();
let food = new Set("🌽🍯🧀🍅");
```

Es posible obtener eficientemente el tamaño de un *Set* o *Map* ya que se almacena como una *property*:

```javascript
insects.size
// > 2
food.size;
// > 4
```

En un *Map* podemos obtenemos el valor de una llave utilizando `.get()`:
```javascript
insects.get('snail');
// > '🐌'
insects.get('ant');
// > undefined
```

Análogamente, el método `.has(value)` nos permite verificar la existencia de *value* en el set:
```javascript
food.has('🧀');
// > true
food.has('🍫');
// > false
```

### Manipular Map y Set
Métodos para agregar y eliminar elementos de la colección:


#### Map
```javascript
animals.set("snail","🐌")
// > Map { 'snail' => '🐌' }
animals.set("bee","🐝").set("dog","🐶")
// > Map { 'snail' => '🐌', 'bee' => '🐝', 'dog' => '🐶' }
animals.delete("bee")
// > true
animals.delete("bee")
// > false
animals.clear()
// > undefined
```

#### Set
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
* `.add(value)` y `set(key, value)` retorna la colección luego de insertar *value* en ella
* `.clear()` retorna *undefined* luego de eliminar todas las entradas
* `.delete(value)` retorna el valor que `.has(value)` habría retornado previamente, luego de eliminar *value* de la colección si estaba presente.

### Iteradores en Map y Set


```javascript
animals.entries()
// > MapIterator { [ 'snail', '🐌' ], [ 'bee', '🐝' ], [ 'dog', '🐶' ] }
animals.keys()
// > MapIterator { 'snail', 'bee', 'dog' }
animals.values()
// > MapIterator { '🐌', '🐝', '🐶' }
```

```javascript
animals.entries()
// > MapIterator { [ 'snail', '🐌' ], [ 'bee', '🐝' ], [ 'dog', '🐶' ] }
animals.keys()
// > MapIterator { 'snail', 'bee', 'dog' }
animals.values()
// > MapIterator { '🐌', '🐝', '🐶' }

fruits.entries()
// > SetIterator { [ '🍒', '🍒' ], [ '🍑', '🍑' ], [ '🍍', '🍍' ] }
fruits.keys()
// > SetIterator { '🍒', '🍑', '🍍' }
fruits.values()
// > SetIterator { '🍒', '🍑', '🍍' }
```

Será posible entonces utilizar *for of* para iterar sobre las colecciones:
```javascript
for (let fruit of fruits) {}
for (let fruit of fruits.keys()) {} //idéntico a lo anterior
for (let [key, value] of fruits.entries()) {}
```

es6 no implementa los *array helpers* para *Sets* y *Maps*, estos son `.map()`, `.filter()`, `.some()`, `.every()`.
Además para *Sets* sería útil poder ejecutar métodos de intersección y unión, pero estos no están implementados.
