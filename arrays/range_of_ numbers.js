// Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max


// function myFunction(numbers) {
//   let min = Math.min(...numbers)
//   let max = Math.max(...numbers)
//     console.log(min)
//     console.log(max)

//     return Array.from({ length: max - min + 1 }, (v, k) => k + min)
// }

// function myFunction(min, max) {
//     var arr = [];
//     for (var i = 0; i <= (max - min); i++) {
//       console.log(i)
//         arr[i] = min + i;
//         console.log(arr[i])
//     };
//     return arr;
// }

// Author Solution
function myFunction(min, max) {
    let arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}



console.log(myFunction(2, 4))
console.log(myFunction(-5, 5));