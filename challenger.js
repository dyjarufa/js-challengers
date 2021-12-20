function foo(x){
  
}

const arr = new Array(1)

arr.length = 2
arr.push(2)
arr.push(0)
console.log(arr)

for(const num in arr) {
  foo(num)
  foo(arr[num])
}