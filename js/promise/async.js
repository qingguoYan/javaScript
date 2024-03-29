//TC39, 对于await后面的如果是promise, 会有一个任务被加到消息队列并异步求值

async function foo() {
  console.log(2);
  console.log(await Promise.resolve(8));
  console.log(9);
}

async function bar() {
  console.log(4);
  console.log(await 6);
  console.log(7);
}

console.log(1);
foo();
console.log(3);
bar();
console.log(5);

// 1 2 3 4 5 6 8 9 6 7
