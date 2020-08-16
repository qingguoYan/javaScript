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
