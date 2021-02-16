// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

function myFunction(letter, textString) {

  return textString.split(letter).length - 1
}


console.log(myFunction('m', 'How many times does the character occur in this sentence?'))
console.log(myFunction('?', 'How many times does the character occur in this sentence?'))