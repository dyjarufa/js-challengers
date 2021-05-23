// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

// function myFunction(obj){
//   console.log(obj);
//   return Object.entries(obj).reduce((accumulator, current) => { 
//     const [key, value] = current;

//     accumulator[ value ] = key;
//     return accumulator;
//   },{})
// }

//Author Solution:

function myFunction(obj) {
  return Object.keys(obj).reduce((acc, cur) => {
    console.log([obj[cur]])
    console.log(cur)
    return {  ...acc, [obj[cur]]: cur };
  }, {});
}


console.log(myFunction({ bear: 'animal', sow: 'female', boar: 'male', cub: 'young' }))