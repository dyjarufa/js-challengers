const errors = [
  "Name cannot be blank",
  "Invalid java version selected: 28",
  "Invalid library selected: SPRIsNG_WEB"
]

let message = "";
      errors.forEach((error) => (message += error + "\n"));
  
console.log(message);