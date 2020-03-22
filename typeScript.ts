let a: any = 1;

a = 2;
a = false;
a = "ss";

//类型推论
let shi: any; //推论出来shi是any类型

//联合类型。可以取多个类型
let chishi: number | string;
// chishi=false  只能声明为number或者string类型
// console.log(chishi.length); 只能访问联合类型的共有属性

//如果联合类型被赋值了，那根据被赋的值，推断出变量的类型，只能调用该类型的方法
let chigoushi: number | string = 1; //被推断为number类型，所以不能使用length

//接口，对类的形状进行描述，大白话就是告诉你这个类里面有什么玩意

interface Dog {
  readonly name: string; //我们不希望小王子的名字被改，可以将name属性改成只读属性
  kind: string;
  sex: string;
  loveFood?: string[];
  loveDog?: Array<string>;
  say?: string;
  [propName: string]: any; //任意属性是any，确定属性和可选属性是它的子集，所以可以给Dog添加任何类型的属性
}

//对象的属性不能比接口少，多了也不中！要实现所有的定义，let's do it
let dog: Dog = {
  name: "小黄",
  kind: "中华田园犬",
  sex: "小王子"
};
//小王子小黄就此诞生啦

//小王子不能叫太可怜了，我们利用可选属性让小王子能够讲话
let dog2: Dog = {
  name: "小黄",
  kind: "中华田园犬",
  sex: "小王子",
  say: "汪汪"
};

//让我们让小王子有更多的能力吧,需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
let dog3: Dog = {
  name: "小黄",
  kind: "中华田园犬",
  sex: "小王子",
  say: "汪汪",
  run: 1,
  isDie: false
};

console.log(dog.name);

//下面我们给小王子一些爱吃的东西,再给它添加一些比较喜欢的小公主
const dog5: Dog = {
  name: "小黄",
  kind: "中华田园犬",
  sex: "小王子",
  say: "汪汪",
  run: 1,
  isDie: false,
  loveFood: ["香肠", "鸡腿", "可乐"],
  loveDog: ["美美", "饼干", "核桃"]
};

//我们给小狗一个函数功能

interface run {
  (name: string, distance?: number): void;
}

let dogRun: run = function(name: string, distance?: number): void {
  console.log(name + "跑起来!", "哇呜,跑了" + distance + "公里");
};

dogRun("旋风", 5); //需要注意的是可选参数后面不能出现必选参数，

//默认参数
function sayHello(name: string, something: string = "hello") {
  console.log(name + something);
}

sayHello("旺财");
sayHello("旺财", "汪汪");

//剩余参数
function sayHello2(name: string, something: string = "hello", ...rest: any[]) {
  console.log(name + something);
  console.log(rest);
}

sayHello2("dog", "汪汪", 1, 2, 3);

//前面讲到过，我们只能访问联合类型的共有方法，但是如果我们想访问不共有的方法也不是不可以，我们可以进行类型断言，我理解为断定某个属性就是这个类型
function getLength(something: string | number): number {
  //string才有length属性
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}
