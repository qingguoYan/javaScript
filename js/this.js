/**
 * let const 变量不会挂载到全局变量
 * 箭头函数会继承外部函数的this，在全局作用域指向全局对象
 */
const a = 1;

const obj = {
  a: 2,
  show1: function () {
    console.log(this);
  },
  show2: () => {
    console.log(this);
  },
};

obj.show1();
obj.show2();

const func1 = obj.show1;
const func2 = obj.show2;
func1();
func2();
