// Write a function that takes an array of numbers as argument
// It should return the average of the numbers


function myFunction(input) {

  //author result
  //return input.reduce( (acc, current) => acc + current, 0 ) / input.length;


  let sum = input.reduce((previous, current) => current += previous);
  return sum / input.length

}


console.log(myFunction([10,100,40]))