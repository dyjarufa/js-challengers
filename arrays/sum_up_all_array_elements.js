

// function myFunction(array, value){
//   return array.filter((val) => val > value).reduce((acc, cur) => ( acc + curr))
  
// }

//Author Solution
function myFunction(arr, num) {
  return arr.reduce((sum, cur) => {
    if (cur > num) return sum + cur;
    return sum;
  }, 0);
}


console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2))

console.log(myFunction([78, 99, 100, 101, 401], 99))
 
console.log(myFunction([-10, -11, -3, 1, -4], -3))