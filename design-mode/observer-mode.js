// 行为型设计模式

let Observer = (function () {
  let _messages = {}
  return {
    regist: function(type, fn){
      if(typeof _messages[type] === 'undefined') {
        // 将动作推入到该消息对应的动作窒息感队列中
        _messages[type] = [fn]
      } else {
        _messages[type].push(fn)
      }
    },
    fire: function(type, args){
      if(!_messages[type]) return

      let events = {
        type,
        args: args || {}
      }, i = 0,
      len = _messages[type].length
      for(;i< len;i++) {
        _messages[type][i].call(this, events)
      }
    },
    remove: function (type, fn){
      if(_messages[type] instanceof Array) {
        let i = _messages[type].length - 1

        if(fn) {
          for(;i<=0;i--) {
            _messages[type][i] === fn && _messages[type].splice(i,1)
          }
        } else {
          _messages[type] = []
        }
        
      }
    }
  }
})()


Observer.regist('fuck', (e) => {
  console.log(e);
})

// Observer.remove('fuck')


setTimeout(() => {
  Observer.fire('fuck', {'fuck': 'cao'})

},3000)