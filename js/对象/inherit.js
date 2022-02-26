function Parent(type) {
  this.type = type;
}
function Child(name) {
  this.name = name;
}
// 原型链继承,存在原型上引用类型互相影响的问题
const parent = new Parent('parent');
Child.prototype = parent;

// 构造函数继承,不能继承父类的原型属性
function Child(name, type) {
  Parent.call(this, type);
  this.name = name;
}
const child = new Child('child', 'parent');

//组合继承,会执行两次父类构造函数
function Child(name, type) {
  Parent.call(this, type);
  this.name = name;
}
Child.prototype = new Parent();

//寄生继承,Object.create()
const a = Object.create(Parent.prototype); //a 继承了 Parent

// 寄生组合式继承,最佳模式
function Child(name, type) {
  Parent.call(this, type);
  this.name = name;
}
Child.prototype = Object.create(Parent.prototype);
