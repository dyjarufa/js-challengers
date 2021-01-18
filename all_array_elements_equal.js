// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise


function myFunction(array) {

  /* author */
  //return new Set(array).size === 1

  let base = array[0];

  return array.every(element => element === base)
}



console.log(myFunction([true, true, true, true]))
console.log(myFunction(['10',10,10,10]))