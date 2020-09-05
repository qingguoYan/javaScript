/**
 * 函数绑定与函数柯里化组合使用
 */

function bind(fn, context) {
  const args = Array.prototype.slice.call(arguments, 2);
  return function () {
    const args2 = Array.prototype.slice.call(arguments);
    const params = args.concat(args2);

    return fn.apply(context, params);
  };
}
