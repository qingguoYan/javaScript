Function.prototype.apply = function () {
  const thisArg = [].slice.call(arguments)[0];
  const args = [].slice.call(arguments)[1];
  const targetFn = this;

  if (!thisArg) {
    targetFn(...args);
  }
  const sy = Symbol(targetFn);
  thisArg[sy] = targetFn;
  return thisArg[sy](...args);
};

let obj = {
  name: 'yanqingguo',
};

function test(sex, age) {
  console.log(this.name);
  console.log(sex);
  console.log(age);
}

test.apply(obj, ['男', 26]);
