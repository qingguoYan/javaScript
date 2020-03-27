/*
    原型对象的作用就是共享
*/

function Cat(name) {
  this.name = name;
  Cat.prototype.color = "yellow";
}

Cat.prototype.sayMiaoMiao = () => {
  console.log("喵喵");
};

const cat1 = new Cat("胖橘");
// cat1.color = "red";  //子类自定义属性和原型对象属性相同时，使用子类的属性，其余子类不受影响
const cat2 = new Cat("狸猫");

cat1.__proto__.color = "red"; //一个子类修改原型对象的属性，其余子类也会受到影响

console.log(cat1.color);
console.log(cat2.color);

console.log(cat1.name);
console.log(cat2.name);

console.log(cat1.sayMiaoMiao === cat2.sayMiaoMiao);
console.log(Object.getPrototypeOf("w"));
// function myFunction(username) {
//   this.username = username;
//   myFunction.prototype.password = "666666";
// }

// var param1 = new myFunction("hehe");
// var param2 = new myFunction("hehe");
// debugger;

// param1.__proto__.password = "11111";

// console.log(param1.password);
// console.log(param2.password);
