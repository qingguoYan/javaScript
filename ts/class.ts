class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayName() {
    return `my name is ${this.name}`;
  }
  run() {
    return `${this.name} run quickly !`;
  }
}

//子类完全继承父类的属性和方法(包括构造方法)
class CuteCat extends Animal {
  color: string = "";
  /**
   * 与父类方法重名，实例会使用子类的方法
   */
  saySex(sex: string) {
    return `my sex is ${sex} a`;
  }
  /**
   * 如果想使用父类方法，使用super
   */
  constructor(name: string, color: string) {
    super(name); //调用父类的构造函数
    console.log(super.sayName());
    this.color = color;
  }
}

const cat = new CuteCat("橘子", "黄色");

console.log(cat.sayName());
console.log(cat.saySex("xiaowangzi"));
console.log(cat.run());
console.log(cat.color);
