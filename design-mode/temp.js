import $ from 'jquery'
let A = {
  a: 'a'
}

let B = {
  b: 'b'
}

global.A = A = B


console.log(global.A);
console.log(A);
console.log(B);