/**
 * class创建对象
 */

class Animal {
  constructor(color) {
    //构造器中设置实例方法和属性
    this.color = color;
    this.run = function() {
      console.log("run run run");
    };
  }
  say() {
    console.log("say");
  }
}

class Dog extends Animal {
  constructor(name, color) {
    super(color);
    this.name = name;
  }
}

let dog = new Dog("哮天犬", "黑色");

//   //构造器外不适用箭头函数设置原型对象prototype的属性
//   eat() {
//     console.log(this);
//   }
// }

// const dog = new Animal("菠萝");

// const cat = new Animal("核桃");

// dog.eat();
// cat.eat();
// const a = dog.eat; //函数调用，this指向全局变量，严格模式下，this为undefined，class默认严格模式
// a();
