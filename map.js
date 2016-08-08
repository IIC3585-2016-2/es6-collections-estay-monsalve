let animals = new Map();
let insects = new Map([["snail","🐌"], ["bee","🐝"]]);

insects.size
// > 2

insects.get('snail');
// > '🐌'
insects.get('ant');
// > undefined

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

animals.entries()
// > MapIterator { [ 'snail', '🐌' ], [ 'bee', '🐝' ], [ 'dog', '🐶' ] }
animals.keys()
// > MapIterator { 'snail', 'bee', 'dog' }
animals.values()
// > MapIterator { '🐌', '🐝', '🐶' }

for (let animal of animals) {console.log(animal)}
for (let animal of animals.keys()) {console.log(animal)} //idéntico a lo anterior
for (let [key, value] of animals.entries()) {console.log(key, value)}
