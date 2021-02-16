// Return last n array elements

// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all


// function myFunction(arr, value) {
//     let maxVal = Math.max(...arr)

//     if (maxVal > value) return arr.slice(Math.max(arr.length - value, 1))

//     return arr;

// }

// Author Solution
function myFunction(arr, n) {
    return arr.slice(-n); // estrai do array de trás para frente
}


console.log(myFunction([1, 2, 3, 4, 5], 2))

console.log(myFunction([1, 2, 3], 6))

console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3))



//Exemplo documentação
var frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga'];
var citricos = frutas.slice(1, 3); //extrai da posição 1 até a posição 3 não incluso()
var citricos2 = frutas.slice(1)

console.log(citricos)
console.log(citricos2)

//**OBS: SE O INICIO FOR OMITIDO, O ÍNDICE COMEÇA A PARTIUR DO ZERO */