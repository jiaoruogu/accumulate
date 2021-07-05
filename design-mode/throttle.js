

let debounce = (function () {
  let timer = null

  return function (fn, interval) {

    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
      timer = null
    }, interval)
    
  }
})()



let debounceDirect = (function () {

  let timer = null

  return function (fn, interval) {

    if(!timer) {
      fn()
      timer = setTimeout(() => {
        console.log('hhahahah')
        timer = null
      }, interval)
    }
   
  }
})()



let throttle = (function(){

  let prev = Date.now()

  return function(fn, dely) {
    const now = Date.now()
    if(now - prev > dely) {
      fn()
      prev = Date.now()
    }
  }
})()


for(let i=0;i<50;i++) {
  throttle(() => {
    console.log(123);
  }, 1)
}