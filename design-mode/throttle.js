// 函数自执行可以去掉，损耗性能。可以引入页面后在调用

let debounce = function () {
  let timer = null,direct = true

  return function (fn, interval) {

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
let throttle = function(){

  let prev = Date.now()
  return function(fn, dely) {
    const now = Date.now()
    if(now - prev > dely) {
      fn()
      prev = Date.now()
    }
  }
}
