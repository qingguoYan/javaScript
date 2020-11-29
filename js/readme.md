# this

this 的指向问题：

- let const 声明的变量不会挂载到全局对象.

- 对象中的 this，`eg：let obj = {a:this.b}`,this 指向所在函数的 this.
- 箭头函数的 this 继承父函数作用域的 this
