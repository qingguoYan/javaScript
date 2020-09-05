/**
 * 改变函数的上下文
 * 要点:闭包
 */

function bind(fn, context) {
  return function () {
    return fn.apply(context, arguments); //fn.call(context)
  };
}
