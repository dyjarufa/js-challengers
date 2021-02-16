/* 
  Check if all array elements are equal
*/

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise


/* 
  MDN DOC
  const isBelowThreshold = (currentValue) => currentValue < 40;

  const array1 = [1, 30, 39, 29, 10, 13];

  console.log(array1.every(isBelowThreshold));
*/



// function myFunction(array) {

//   return array.every((val, i, array) => val === array[0])
// }

//Opção 2:

// const isEqual = (val, i, array) => val === array[0]
// function myFunction(array) {

//   return array.every(isEqual)
// }


//Author solution
function myFunction( input ) {
  return new Set(input).size === 1
}

console.log(myFunction([true, true, true, true]))
console.log(myFunction([true, true, true, '1']))


