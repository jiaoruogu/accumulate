// 函数自执行可以去掉，损耗性能。可以引入页面后在调用

let debounce = function (fn, interval = 100) {
  let timer = null

  return function () {

    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
      timer = null
    }, interval)
    
  }
}




// 此处可以作为一个节流的，有一个问题。异步代码是需要同步代码执行完才会执行，时间上有可能会不准确
let debounceDirect = function () {

  let timer = null, flag = true

  return function (fn, interval) {

    if(!timer && flag) {
      fn()
      flag = false
      timer = setTimeout(() => {
        console.log('hhahahah')
        timer = null
        flag = true
      }, interval)
    }
   
  }
}



// 节流函数
let throttle = function(fn, dely){

  let prev = Date.now()
  return function() {
    const now = Date.now()
    if(now - prev > dely) {
      fn()
      prev = Date.now()
    }
  }
}

// 节流函数实现之二
function throttle2 (fn, dely = 100) {
  let flag = true
  return function () {
    if (flag) {
      flag = false
      fn()
      setTimeout(() => flag = true, dely)
    }
  }
}
