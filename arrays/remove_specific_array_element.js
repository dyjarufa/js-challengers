// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version

// function myFunction(arr, val) {
//     return arr.filter(function(item, index) {
//         return item !== val
//     })
// }


// Author Solution
function myFunction(arr, value) {
    return arr.filter(cur => cur !== value)
}

console.log(myFunction([1, 2, 3], 2));

console.log(myFunction([1, 2, '2'], '2'));

console.log(myFunction([false, '2', 1], false));

console.log(myFunction([1, 2, '2', 1], 1));