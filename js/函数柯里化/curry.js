function curry(fn) {
  const outArgs = [].slice.call(arguments, 1);
  return function () {
    const innerArgs = [].slice.call(arguments);
    const totalArgs = [...outArgs, ...innerArgs];
    if (!innerArgs.length) {
      return fn.call(this, ...totalArgs);
    } else {
      return curry(fn, ...totalArgs);
    }
  };
}

function add() {
  console.log('参数', [...arguments]);
  return [...arguments].reduce((pre, next) => {
    return pre + next;
  }, 0);
}

const curryAdd = curry(add);
console.log(curryAdd(1)());
console.log(curryAdd(1, 2, 3)());
console.log(curryAdd(1)(3)(5)());
