/**
 * 改变函数的上下文
 * 要点:闭包
 */

Function.prototype.bind = function () {
  const thisArg = [].slice.call(arguments)[0];
  const outArgs = [].slice.call(arguments, 1);
  const targetFn = this;
  function bound() {
    const innerArgs = [].slice.call(arguments);
    return targetFn.apply(this instanceof targetFn ? this : thisArg, [
      ...outArgs,
      ...innerArgs,
    ]);
  }
  bound.prototype = Object.create(targetFn.prototype);
  return bound;
};

let obj = { name: '闫庆国' };

function test(age, sex) {
  console.log(this.name);
  console.log(age);
  console.log(sex);
}

test.bind(obj, '男')(26);
