let fruits = new Set();
let food = new Set("🌽🍯🧀🍅");

food.size;
// > 4

food.has('🧀');
// > true
food.has('🍫');
// > false

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

fruits.entries()
// > SetIterator { [ '🍒', '🍒' ], [ '🍑', '🍑' ], [ '🍍', '🍍' ] }
fruits.keys()
// > SetIterator { '🍒', '🍑', '🍍' }
fruits.values()
// > SetIterator { '🍒', '🍑', '🍍' }

for (let fruit of fruits) {console.log(fruit)}
for (let fruit of fruits.keys()) {console.log(fruit)} //idéntico a lo anterior
for (let [key, value] of fruits.entries()) {console.log(key,value)}
