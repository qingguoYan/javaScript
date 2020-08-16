function* generator() {
  const res = yield foo();
  return res;
}

function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("返回一个promise");
      resolve(1);
    }, 1000);
  });
}

const it = generator();
console.log(it);
const promise = it.next().value;
console.log(promise);

promise.then((res) => {
  setTimeout(() => {
    console.log(it.next(res));
  }, 5000);
});

/**
 * 递归调用迭代器
 * @param {传入的生成器} gen
 */
function run(gen) {
  const arg = [].slice.call(arguments, 1); //得到gen生成器的参数
  const it = gen.apply(this, arg); //全局变量设置生成器
  return Promise.resolve().then(function handleNext(value) {
    const next = it.next(value);
    console.log(next);
    return (function handleResult(next) {
      if (next.done) {
        //如果执行完成
        return next.value;
      } else {
        return Promise.resolve(next.value).then(handleNext, function handleErr(
          err
        ) {
          return Promise.resolve(it.throw(err)).then(handleResult);
        });
      }
    })(next);
  });
}

function* getList() {
  const res = yield Promise.resolve(2);
  console.log(res);
}

run(getList);
