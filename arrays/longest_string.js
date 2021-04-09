// Write a function that takes an array of strings as argument
// It should return the longest string

 function myFunction(strings) {

  console.log(strings)

  return strings.reduce((acc, curr) => 
    acc.length  > curr.length  ? acc : curr
  )

} 

/* Author Solution */
// function myFunction( input ) {
//   return input.reduce((a, b) => a.length <= b.length ? b : a)
//   }


console.log(myFunction(['help', 'me']))
console.log(myFunction(['I', 'need', 'candy']))