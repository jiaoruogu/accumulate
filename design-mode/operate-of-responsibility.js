
// let A = function (){
//   return B
// }

// // console.log(B);

// // A.prototype = {
// //   length: 2,
// //   size(){
// //     return this.length
// //   },
// // }

// // console.log(A.a);
// // console.log(new A().size());


// let B = A.prototype = {
//   length: 2,
//   size(){
//     return this.length
//   },
// }

// console.log(A().size());


let A = function(selector) {
  return A.fn.init(selector)
}

A.fn = A.prototype = {
    init(selector) {
      // return document.getElementById(selector)
      this[0] = document.getElementById(selector)
      this.length = 1
      return this
    },
    length: 2,
    size(){
      return this.length
    },
}


console.log(A().size());