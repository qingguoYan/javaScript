/**
 * 使用闭包返回的函数需要设置参数
 * 要点:闭包
 */

function curry(fn) {
  const args = Array.prototype.slice.call(arguments, 1);
  return function () {
    const args2 = Array.prototype.slice.call(arguments);
    const params = args.concat(args2);
    return fn.apply(null, params);
  };
}

// 实现add(1)(2)(3)(4)()
function curry(...value) {
  let args = [...value];
  function add(...args) {
    console.log(args);
    return args.reduce((a, b) => a + b);
  }
  return function c(...newArgs) {
    if (newArgs.length) {
      args = [...args, ...newArgs];
      return c;
    } else {
      return add(...args);
    }
  };
}

// const add = curry();
console.log(curry(1)(2)(3)(4)());
