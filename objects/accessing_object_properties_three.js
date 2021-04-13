// Write a function that takes a string and an object with two properties as arguments
// It should return the value of the property with key equal to the value of the string

function myFunction(obj, key) {

  return obj[key];
}


console.log(myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent'))

console.log(myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country'))