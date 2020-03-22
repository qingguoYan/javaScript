/*
    原型对象的作用就是共享
*/

function Cat(name) {
  this.name = name;
}

Cat.prototype.sayMiaoMiao = () => {
  console.log("喵喵");
};

const cat1 = new Cat("胖橘");
const cat2 = new Cat("狸猫");

console.log(cat1.name);
console.log(cat2.name);

console.log(cat1.sayMiaoMiao === cat2.sayMiaoMiao);
console.log(Object.getPrototypeOf("w"));
