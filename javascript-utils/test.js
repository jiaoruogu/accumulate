String.prototype.test = 5

let str = "hello"

console.log(str.test);


console.log(1e8 * 2);


console.log(1e-1 + 2e-1);

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

let a = arr[2]


a()