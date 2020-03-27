/**
 * js面向对象编程
 */

/**
 * 自己定义一个工厂，返回一个对象
 */
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw a circle");
    }
  };
}

const circle = createCircle();
circle.draw();
console.log(circle.radius);

/**
 * 构造函数创建对象
 * new 发生的三件事
 * 1.内存创建一个空对象{}
 * 2.this指向这个对象，我觉得这个this是空对象的内存地址
 * 3.返回这个对象
 */

function CreateCircle(name) {
  this.name = name;
  this.draw = function() {
    console.log(this.name);
  };
}

const myCircle = new CreateCircle("小兔兔");
console.log(myCircle.constructor); //对象的constructor指向对象的构造函数

/**
 * 值类型与引用类型，值类型传递值，引用类型传递引用
 */

let num = 1;
function increase(num) {
  return num++;
}
increase(num);
console.log(num); //输出为1，参数num被赋值1

const obj = {
  num: 1
};
function increase(obj) {
  return obj.num++;
}

increase(obj);
console.log(obj.num); //2，引用类型传递引用

/**
 * 遍历对象属性  for...in，会遍历原型的属性，没有出现原型的属性是因为Object的属性都设置了不可遍历特性
 * 得到对象所有的键 Object.keys(obj)
 * 判断对象是否含有键 in
 */

const yqg = {
  name: "yqg",
  age: 24
};

for (let key in yqg) {
  console.log(key, yqg[key]);
}

console.log(Object.keys(yqg));

console.log("name" in yqg);

/**
 * 面向对象之抽象以及js闭包
 * 对象的抽象简而言之就是隐藏细节和复杂部分，暴露必须的部分
 * 闭包  闭包可以让你从内部函数访问外部函数作用域。
 * 在 JavaScript 中，每当函数被创建，就会在函数生成时生成闭包。内部函数一直维持着与外部函数的环境关系
 */

function Apple(name) {
  //闭包，在构造函数执行完毕后，该变量仍然存在于内存中
  let speak = function() {
    console.log("hello apple !");
  };
  let color = "red";
  this.name = name;
  this.say = function() {
    speak();
    console.log(color);
    console.log(this.name);
  };
}

const apple = new Apple("红富士");
console.log(apple);
apple.say(); //将一些不想被外界访问的方法抽象化，对象被创建后，使用say方法仍然能使用speak,color这些变量，是因为js闭包机制的存在,如果内部函数引用了外部函数，外部函数执行完成后，被内部函数引用的变量不被垃圾回收，仍然在内存中存在
