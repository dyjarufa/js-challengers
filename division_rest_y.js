// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y


// function myFunction(x, y) {
//     let rest_y = (x + y) % y;    

//     if (x % y === 0) 
//         return x; 
//     else
//         return x + y - rest_y; 
// } 

//refatorado
function myFunction(x, y) {
    while (x % y !== 0) x++;
    console.log(x)
    return x;
  }

 console.log(myFunction(1,23))
 console.log(myFunction(23,23))
 console.log(myFunction(7,3))
 console.log(myFunction(-5,7))   