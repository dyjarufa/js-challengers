
// Write a function that takes an array of strings as argument
// It should return the array with its values sorted alphabetically
function myFunction(strings){
  // return strings.sort( function(a,b ){
  //   if(a < b) return -1;
  //   else if(a > b) return 1;
  //   return 0
  // });

  return strings.sort();
}

console.log(myFunction(['b', 'c', 'd', 'a']))

console.log(myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w']))




/* ORDER AND REVERSE */
function myFunctionReverse(input){
  
  //author result
  //return input.sort((a, b) => b - a)

  return input.sort().reverse()

}

console.log(myFunctionReverse([1,3,2]))

console.log(myFunctionReverse([4,2,3,1]))