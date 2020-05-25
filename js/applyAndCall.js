function Person1() {
  this.name = "yanqingguo";
}

function Person2() {
  this.getName = function () {
    console.log(this.name);
  };

  Person1.call(this); //改变Person1函数的this指向，现在Person1的this指向了Person2,Person2函数拥有了Person1的name属性
}

const person2 = new Person2();

person2.getName(); //yanqingguo

const person1 = new Person1();

console.log(person1.name); //yanqingguo
