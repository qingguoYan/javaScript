// add(1)(2)(3)(4)()
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
