var a = 1;
a = 2;
a = false;
a = "ss";
//类型推论
var shi; //推论出来shi是any类型
//联合类型。可以取多个类型
var chishi;
// chishi=false  只能声明为number或者string类型
// console.log(chishi.length); 只能访问联合类型的共有属性
//如果联合类型被赋值了，那根据被赋的值，推断出变量的类型，只能调用该类型的方法
var chigoushi = 1; //被推断为number类型，所以不能使用length
//对象的属性不能比接口少，多了也不中！要实现所有的定义，let's do it
var dog = {
    name: "小黄",
    kind: "中华田园犬",
    sex: "小王子"
};
//小王子小黄就此诞生啦
//小王子不能叫太可怜了，我们利用可选属性让小王子能够讲话
var dog2 = {
    name: "小黄",
    kind: "中华田园犬",
    sex: "小王子",
    say: "汪汪"
};
//让我们让小王子有更多的能力吧,需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
var dog3 = {
    name: "小黄",
    kind: "中华田园犬",
    sex: "小王子",
    say: "汪汪",
    run: 1,
    isDie: false
};
console.log(dog.name);
//下面我们给小王子一些爱吃的东西,再给它添加一些比较喜欢的小公主
var dog5 = {
    name: "小黄",
    kind: "中华田园犬",
    sex: "小王子",
    say: "汪汪",
    run: 1,
    isDie: false,
    loveFood: ["香肠", "鸡腿", "可乐"],
    loveDog: ["美美", "饼干", "核桃"]
};
var dogRun = function (name, distance) {
    console.log(name + "跑起来!", "哇呜,跑了" + distance + "公里");
};
dogRun("旋风", 5); //需要注意的是可选参数后面不能出现必选参数，
//默认参数
function sayHello(name, something) {
    if (something === void 0) { something = "hello"; }
    console.log(name + something);
}
sayHello("旺财");
sayHello("旺财", "汪汪");
//剩余参数
function sayHello2(name, something) {
    if (something === void 0) { something = "hello"; }
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    console.log(name + something);
    console.log(rest);
}
sayHello2("dog", "汪汪", 1, 2, 3);
