/**
 * 原型对象的继承
 */

function Food() {
  this.sayFood = function () {
    console.log("say food food");
  };
}

Food.prototype.category = "美好的东西";

function Fruit() {
  this.sayFood = function () {
    console.log("say fruit fruit");
  };
}

// Fruit.prototype.name = "mango";
//fruit原型继承food原型
Fruit.prototype = Object.create(Food.prototype); //此举会将Fruit原来的prototype所有属性和方法清空，注意构造函数将会指向Food，Fruit的constructor方法继承自Food
Fruit.prototype.name = "mango";
Fruit.prototype.constructor = Fruit; //重新执行Fruit的构造函数
const food = new Food();
// const fruit = new Fruit();
const fruit = new Fruit.prototype.constructor(); //在继承别的原型之后，不要忘了将构造函数重新指定
