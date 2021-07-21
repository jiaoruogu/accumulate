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
    for(let j=2;j<i;j++){
      if (i%j != 0) {
        flag = false
      }
    }
    if(flag) {
      console.log(i);
    }
    i++
  }
}

prime(10)