// function myFunction( ...arrays ) {
//   let newArr = arrays.flat(); //flat() junta os arrays
//   return newArr.filter((item, index) => newArr.indexOf(item) === index).sort((a, b) => a-b);
// }

//Author solution

function myFunction(first, second) {
  return [...new Set([...first, ...second])].sort((a, b) => a - b);
}


  console.log(myFunction([1, 2, 3], [3, 4, 5]))

   console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]))

