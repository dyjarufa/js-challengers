function revert(input){
  let inverText = String(input).split("")
  return inverText.reverse().join("")
}

console.log(revert('Hello World'))