let a = 1, b = 1;

console.log( ++a ); // 2，前置运算符返回最新值
console.log( b++ ); // 1，后置运算符返回旧值

console.log( a ); // 2，自增一次
console.log( b ); // 2，自增一次



let a2 = 2;

let x = 1 + (a2 *= 2);

// a2 4  x 5

console.log(1 - null);
console.log(null - 1);

if("0") {
  console.log('执行');
}

console.log(Boolean("0"));

// 换句话说，一个或运算 || 的链，将返回第一个真值，如果不存在真值，就返回该链的最后一个值。
// 换句话说，与运算返回第一个假值，如果没有假值就返回最后一个值。

// 与运算 && 的优先级比或运算 || 要高。

// 所以代码 a && b || c && d 跟 && 表达式加了括号完全一样：(a && b) || (c && d)。

console.log(console.log(1) || 2 || console.log(3) );
// 对 console.log(1) 的调用没有返回值。或者说返回的是 undefined。

console.log(a ?? x);


// || 返回第一个 真 值
// ?? 返回第一个 已定义的 值。
// 换句话说，|| 无法区分 false、0、空字符串 "" 和 null/undefined。它们都一样 —— 假值（falsy values）。如果其中任何一个是 || 的第一个参数，那么我们将得到第二个参数作为结果。

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0



// while 循环随时可以通过break指令跳出循环

console.log('--------------------------------');
{
let i = 0;
while (++i < 5) console.log( i );
}
{
let i = 0;
while (i++ < 5) console.log( i );
}

console.log('--------------------------------');

for (let i = 0; i < 5; i++) console.log( i );
console.log('隔开');
for (let i = 0; i < 5; ++i) console.log( i );
console.log('--------------------------------');

for (let i = 0; i < 11; i++) {

  if (i % 2 === 0) {
    console.log(i);
  }

}

console.log('--------------------------------');
{
let i = 0
while (true) {
  console.log(`Number${i++}`);
  if(i>=3) break
}
}


console.log('--------------------------------');

function prime(n) {
  let i = 2
  while(i <= n) {
    let flag = true
    for(let j=2;j <= i / 2;j++){
      if (i%j == 0) {
        flag = false
        break
      }
    }
    if(flag) {
      console.log(i);
    }
    i++
  }
}

prime(20)


console.log('--------------------------------');

function isEmpty(obj) {
  if(JSON.stringify(obj) === '{}') {
    return true
  }
  return false

}

let schedule = {}

console.log(isEmpty(schedule));

console.log('--------------------------------');

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalary(salaries){
  let sum = 0
  if(isEmpty(salaries)) return sum

  for (const value of Object.values(salaries)) {
    sum += value
  }
  return sum
}

console.log(sumSalary(salaries));

console.log('--------------------------------');

// 在调用之前
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu) {
  for (const key in menu) {
    if (Object.hasOwnProperty.call(menu, key)) {  
      if(typeof menu[key] === 'number') {
        menu[key] *= 2
      }
      
    }
  }
}

multiplyNumeric(menu);

console.log(menu);


console.log('--------------------------------');


function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser()

console.log(global.user);


console.log('--------------------------------');

// {
// global.identity = 'The Global'

// let object = {
//   identity: 'The Object',
//   gentIdentity() {
//     return this.identity
//   }
// }

// object.gentIdentity()  // The Object
// (object.gentIdentity)() // The Object
// (object.gentIdentity = object.gentIdentity)() // The Global

// }

// this的值是在代码运行中计算出来的，它取决于代码上下文（取决于在“点符号前”的是什么对象）


console.log('--------------------------------');

// let calculator = {
//   read(){
//     this.a = prompt('请输入第一个')
//     this.b = prompt('请输入第二个')
//   },
//   sum() {
//     return +this.a + +this.b
//   },
//   mul () {
//     return +this.a * +this.b
//   }
// }

// calculator.read()
// alert( calculator.sum() );
// alert( calculator.mul() );

console.log('--------------------------------');


let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { // 显示当前的 step
    console.log( this.step );
    return this
  }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

ladder.up().up().down().showStep().down().showStep() // 1



// function Calculator () {
//   this.a = 0
//   this.b = 0
//   this.read = () => {
//     this.a = +prompt('第一个')
//     this.b = +prompt('第二个')
//   }

//   this.sum = () => {
//     return this.a + this.b
//   }

//   this.mul = () => {
//     return this.a * this.b
//   }
// }


// let calc = new Calculator

// calc.read()

// console.log(calc.sum());
// console.log(calc.mul());


console.log('--------------------------------');


// function Accumulator(startingValue = 0) {
//   this.value = startingValue

//   this.read = () => {
//     let temp = +prompt('输入', 0)
//     this.value += temp
//   }
// }

// let accumulator = new Accumulator(1); // 初始值 1

// accumulator.read(); // 添加用户输入的 value
// accumulator.read(); // 添加用户输入的 value

// alert(accumulator.value); // 显示这些值的总和


// {
//   let arr = ["a", "b"];

// arr.push(function() {
//   console.log( this );
// })

// let a = arr[2]

// a()
// }


{
  function camelize(str) {

    let temp = str.split('-')

    temp = temp.map((i,index) => {
      if(index > 0) {
        console.log('zouni');
        i = i[0].toUpperCase() + i.slice(1)
        console.log(i);
      }
      return i
    })

    console.log(temp);

    return temp.join('')

  }

  console.log(camelize("background-color"));
}


const bb = [{a: 1},{a: 2}]

bb.map(i => {
  i.a *= 2
})

console.log(bb);