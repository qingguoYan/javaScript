function A(age) {
  this.age = age;
}

function B(name, age) {
  this.name = name;
  A.call(this, age);
}

B.prototype = Object.create(A.prototype);

const b = new B("tom", 12);

console.log(b.name);
console.log(b.age);
B.prototype.sex = "man";
console.log(b.sex);

console.log(b.__proto__);

// const a = { name: "yqg", age: 1 };

// Object.defineProperty(a, "name", {
//   writable: true,
//   configurable: true,
//   enumerable: true,
//   value: "xixi",
// });

// Object.defineProperty(a, "name", {
//   get: function () {
//     return this.age;
//   },
//   set: function (name) {
//     this.name = name;
//   },
// });

// a.name = "fdsfewf";

// console.log(a.name);

// function hasPrototypeType (obj,property){
//   return !obj.hasOwnProperty(property) && property in obj;
// }
