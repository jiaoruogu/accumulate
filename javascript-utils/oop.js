
function SuperType() {
  this.property = true
}

SuperType.prototype.getSuperValue = function () {
  return this.property
}

function SubType() {
  this.subproperty = false
}

// 继承SuperType
SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function () {
  return this.subproperty
}

let instance = new SubType()
console.log(instance.getSuperValue())


class Father {
  constructor() {
    this.property = true
  }

  getFatherValue() {
    return this.property
  }
}


class Son extends Father {
  constructor() {
    super();
    this.sonproperty = false
  }

  getSonValue() {
    return this.sonproperty
  }
}

let instance2 = new Son()
console.log(instance2.getFatherValue())


// 解决原型包含引用值导致的继承问题，盗用构造函数
function SuperType1() {
  this.colors = ['red', 'blue', 'green']
}

function SubType1() {
  // 继承SuperType1
  SuperType1.call(this)
}

// SubType1.prototype = new SuperType1()

let instance1 = new SubType1()
instance1.colors.push('black')
console.log(instance1.colors)

let instance3 = new SubType1()
console.log(instance3.colors)


// 组合继承
function SuperType2(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

SuperType2.prototype.sayName = function () {
  console.log(this.name)
}

function SubType2(name, age) {
  // 继承属性
  SuperType2.call(this, name)

  this.age = age
}

// 继承方法
SubType2.prototype = new SuperType2()

SubType2.prototype.sayAge = function () {
  console.log(this.age)
}

let instance4 = new SubType2('nick', 29)
instance4.colors.push('black')
console.log(instance4.colors)
instance4.sayName()
instance4.sayAge()

let instance5 = new SubType2('Greg', 27)
console.log(instance5.colors)
instance5.sayName()
instance5.sayAge()


// 原型式继承
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

// Object.create() 这个api可以用来代替object函数



let person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};
let anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
let yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
console.log(person.friends);
console.log(person.name);


// 寄生式组合继承
function inheritPrototype(subType, superType) {
  let prototype = object(superType.prototype); // 创建对象
  prototype.constructor = subType; // 增强对象
  subType.prototype = prototype; // 赋值对象
}


function SuperType6(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

SuperType6.prototype.sayName = function () {
  console.log(this.name)
}

function SubType6(name, age) {
  SuperType6.call(this, name)
  this.age = age
}



inheritPrototype(SubType6, SuperType6)

SubType6.prototype.sayAge = function () {
  console.log(this.age)
}


let instance6 = new SubType6('nicke', 29)
instance6.colors.push('black')
console.log(instance6.colors)
instance6.sayName()
instance6.sayAge()

let instance7 = new SubType6('Grege', 27)
console.log(instance7.colors)
instance7.sayName()
instance7.sayAge()


class Person {

  // 访问器
  set name(value) {
    this._name = value
  }

  get name() {
    return this._name
  }


  // 静态方法。通常用于执行不特定于实例的操作
  static create() {

    // 静态方法非常适合作为实例工厂
    return new Person()
  }
}
let person1 = new Person()
person1.name = 'fuck'
console.log(person1.name)


let a =
  {
    code:200,
    count: 0,
    data: {
      'A2160000': [{},{}],
      'A2160001': [{},{}]
    },
    message: '',
  }
