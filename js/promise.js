/**
 * 异步：现在和未来的时间间隙
 * 事件循环队列：js引擎只会在需要的时候才会执行，谁的需要，宿主环境！宿主环境处理异步事件的机制，当js引擎发现这里有个异步回调时，会告诉宿主环境，这里有个回调函数处理事件准备要加入
 *             到事件循环队列中去，当得到这个异步操作的执行结果后，请将对应的回调函数放入到事件循环队列中去。
 * 消息任务队列：异步事件总是添加到事件循环队列的末尾，但是消息任务队列是当前事件执行完成后接着去执行，是一种插队行为。
 *
 * 事件循环队列和异步队列都具有原子性，队列中的前一个事件完成后后面的事件才能执行。
 *
 * promise解决了异步回调函数的两大问题
 * 1.异步函数执行顺序不好判断，容易产生竞态
 * 2.异步函数有信任问题，第三方库调用我们的异步函数时，我们将代码的控制权交了出去，
 * 这样我们必须对异步函数的可能出现的行为进行预处理，可能回调函数被调用的过早或者过晚(比能确定回调函数是顺序执行还是异步执行),
 * 可能回调函数被调用多次，回调函数出现的错误被吞掉等情况，处于“信任，但必须校验的原则”，我们不得不对回调函数的异步调用进行协作和
 * 交互处理，对于众多的回调函数都是用这样的处理，这真的是回调地狱
 *
 * promise如何解决这两个问题呢
 * 1.promise的执行顺序是有规则的，promise让异步操作和事件状态不再相关，即promise统一了现在和将来，
 * 异步回调函数执行的顺序（任务队列中的）取决于promise什么时候被进行了决议，这样就可以控制回调函数的执行顺序
 * 对promise的then注册的成功或失败回调函数都会加入到本次事件的消息队列中去，
 * 并且这些回调函数会在下一个异步时间点依次被调用
 * 2.正是因为promise统一了现在和将来，所以promise的回调函数避免了提前或者延迟被调用，
 * 2.1而且promise的then注册的回调函数一定会被调用。
 * 2.2 promise只能进行依次决议，后面的决议都会被忽略
 * 2.3 promise的决议参数只能有一个，后面的参数会被忽略
 */

//下面的操作证明 事件循环队列中的事件执行完成后，如果对此次执行的事件的结果进行了监听，监听的任务将会加入到消息队列中去，消息队列的任务执行完成后，才会执行下一个事件循环队列中的事件
console.log("同步任务开始");
const promise1 = new Promise((resolve, reject) => {
  console.log("111111");
  setTimeout(() => {
    resolve(1); //promise1进行决议之后，消息队列中加入一个任务，该任务是设置一个3s的定时器，3秒后又往循环事件队列中加入了一个回调函数
    console.log("异步任务1开始发起");
  }, 1000); //1秒钟将该回调事件放入事件循环队列执行，执行操作是对promise1进行决议，对promise1的then注册的回调函数会被加入到消息任务队列
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2); //promise进行决议之后，消息队列中加入一个任务
    console.log("异步任务2开始发起");
  }, 2000); //2秒钟后将改事件放入事件循环队列
});

promise1.then(
  function (res) {
    setTimeout(() => console.log(res), 3000);
  },
  function (err) {
    console.log(err);
  }
);
promise2.then(
  function (res) {
    console.log(res);
  },
  function (err) {
    console.log(err);
  }
);

/**
 * promise有三种状态 pending、fulfilled、rejected，then注册的成功回调函数如果接收到promise或者thenable对象，
 * 会将promise展开得到决议值，而失败回调函数不会展开
 */
new Promise((resolve, reject) => {
  //   throw new Error();
  resolve(Promise.resolve("我是promise"));
}).then(
  (res) => {
    //res如果是promise，promise将会被展开获取到promise的决议值
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
console.log("同步任务结束");
