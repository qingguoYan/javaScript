function newOperator(constructor) {
  newOperator.target = constructor;
  const obj = Object.create(constructor.prototype);
  const args = [].slice.call(arguments, 1);
  const cobj = constructor.apply(obj, args);
  const isObject = typeof cobj === 'object' || typeof cobj === null;
  const isFunction = typeof cobj === 'function';
  if (isFunction || isObject) {
    return cobj;
  }
  return obj;
}

function People(name, age) {
  this.name = name;
  this.age = age;
}

const obj = newOperator(People, 'yanqingguo', 26);
console.log(obj);
