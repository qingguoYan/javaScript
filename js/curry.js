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
