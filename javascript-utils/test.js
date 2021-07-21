function Father () {
  this.name = 'andy'
  this.age = 24
}

Father.prototype.name = 'prototype'

let f = new Father()


console.log(Father.prototype.__proto__.__proto__);

let a = 1, b = 1;

let c = ++a; // ?  a = 2 c = 2
let d = b++; // ?   d=1 b=1
console.log(a,b,c,d);