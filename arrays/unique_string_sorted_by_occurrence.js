/*
 * Create a function that gets a list of strings and output a list of unique strings sorted by the
 * number of occurrences 
 *
 * Example INPUT: ['Bar', 'Foo', 'Bar', 'Faz']
 
 * Example OUTPUT: ['Bar', 'Faz', 'Foo']
 */

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

let array = ['Bar', 'Foo', 'Bar', 'Faz', 'jaja', 'jaja', 'jaja']

let unique = array.filter(onlyUnique).sort((a,b) => a - b)

console.log(unique)



var myArray = ['Bar', 'Foo', 'Bar', 'Faz'];

let unique2 = [...new Set(myArray)];

console.log(unique2); // unique is ['a', 1, 2, '1']



var allTypesArray = ['Bar', 'Foo', 'Bar', 'Faz', 'jaja', 'jaja', 'jaja']//["4", "4", "2", "2", "2", "6", "2", "6", "6"];

var map = allTypesArray.reduce(function(p, c) {
  p[c] = (p[c] || 0) + 1;
  return p;
}, {});

var newTypesArray = Object.keys(map).sort(function(a, b) {
  return map[b] - map[a];
});

console.log(newTypesArray)
