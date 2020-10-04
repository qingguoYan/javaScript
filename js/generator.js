/**
 * generator生成器可以使用同步、顺序、阻塞的方式组织代码，更符合我们大脑的思维方式。
 * generator是一个状态机，可以通过yield阻塞生成器内部代码的执行，生成器返回一个迭代器
 * 用来控制生成器代码的运行(next方法)，每一次执行迭代器的next方法，都会返回一个对象{value:"",status:""},
 * value代表yield关键字后面表达式的值，status代表状态机是否执行完毕。next方法可以接受一个参数，作为上一个yield的操作结果。
 * 由此我们可以在yield后面返回一个promise对象，然后通过promise的回调函数调用迭代器的next方法，并将promise的决议值作为next的参数，
 * 如此我们可以在生成器中得到promise的决议值用以下面的操作。
 */

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
        console.log(next.value); //hello
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
  return "hello";
}

run(getList);

//不自动执行generator，通过yield返回的promise调用迭代器next方法并将promise的决议值传回generator
// function* generator() {
//   const res = yield foo();
//   return res;
// }

// function foo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("返回一个promise");
//       resolve(1);
//     }, 1000);
//   });
// }

// const it = generator();
// console.log(it);
// const promise = it.next().value;
// console.log(promise);

// promise.then((res) => {
//   setTimeout(() => {
//     console.log(it.next(res));
//   }, 5000);
// });
