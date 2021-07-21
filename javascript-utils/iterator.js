let arr = ['a', 'b', 'c']


// 迭代器工厂函数
console.log(arr[Symbol.iterator]);


// 迭代器
let iter = arr[Symbol.iterator]()
console.log(iter);


// 执行迭代

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

console.log(Symbol('boo') === Symbol('boo'));


let [one, ...two] = arr

console.log(one);
console.log(two);