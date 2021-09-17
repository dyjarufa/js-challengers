function giveChange(input) {
  var string = input.split(" ")
  console.log(string)

  return string.join('\n')
}

console.log(giveChange('hello world !'));
