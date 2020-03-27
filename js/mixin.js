/**
 * 使用组合的方式为构造函数的原型对象添加共享的属性和方法
 */

const say = {
  saySomething: function() {
    return "saySomething";
  }
};

const speak = {
  speakSomething: function() {
    return "speakSomething";
  }
};

const eat = {
  eatSomething: function() {
    return "eatSomething";
  }
};

function minix(target, ...source) {
  return Object.assign(target, ...source);
}

function Person(name) {
  this.name = name;
}

minix(Person.prototype, eat, speak, say);

const person = new Person("yqg");
