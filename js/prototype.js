/**
 * 原型对象就是一个对象实例的爸爸
 */

const objA = {}; //objA的原型对象是Object,所以objA可以有Obj的方法和属性
const objB = {};
console.log(Object.getPrototypeOf(objA));
console.log(Object.getPrototypeOf(objA) === Object.getPrototypeOf(objB)); //true objA、objB的原型对象都为Object

const arrA = [];
console.log(Object.getPrototypeOf(arrA)); //arrA的原型对象为Array,Array的原型对象为Object

const person = {
  name: "yqg"
};
//定义对象属性的特征
Object.defineProperty(person, "name", {
  writable: false, //不可写
  enumerable: false //不可枚举
});

person.name = "嘿嘿嘿";
console.log(person.name); //name仍然为yqg
console.log(Object.keys(person)); //[]空数组

/**
 * 构造函数 prototype，通过构造函数我们可以获得构造函数的原型对象(该对象的所有属性被所有实例共享)，
 * 我们可以通过 Constructor.prototype.property 在原型对象上设置属性和方法
 */
function Animal() {}
console.log((Animal.prototype.name = "小花")); //所有属性都被实例共享
const dog = new Animal();
console.log(dog.name); //小花
