// Write a function that takes an object as argument
// It should return an object with all original object properties but the property with key 'country'


// function myFunction(obj) {

//   delete obj['country']
  
//   return obj
// }


//Author's solutions
function myFunction(obj){
  const {country, ...rest} = obj;

  return rest;
}

console.log(myFunction({ continent: 'Asia', country: 'Japan', region: 'Kansai' }))

console.log(myFunction({ country: 'Sweden', continent: 'Europe', planet: 'Earth' }))

console.log(myFunction({ city: 'Sacramento', state: 'California', country: 'USA', continent: 'North America' }))