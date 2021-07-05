// 行为型设计模式

let ProcessStrategy = (function () {
  let list = {
    name1 () {
      console.log('name1');
    },
    name2 () {
      console.log('name2');
    },
    name3 () {
      console.log('name3');
    },
    name4 () {
      console.log('name4');
    },
  }
  return {
    process(type) {
      return list[type] && list[type]()
    }
  }
})()