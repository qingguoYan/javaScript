//Promise.resolve幂等,Promise.resolve()如果参数是一个promise对象,返回的新promise对象就是参数promise,两者完全相等
const pp = Promise.resolve(new Promise(() => {})); // Promise<pending>
const pp2 = Promise.resolve(Promise.resolve('resolved')); // Promise<resolved> "resolved"
const pp3 = Promise.resolve(Promise.reject('rejected')); // Promise<rejected> "rejected"
const ppp = Promise.resolve(pp2);
setTimeout(console.log, 0, ppp === pp2); //true
setTimeout(console.log, 0, pp);
setTimeout(console.log, 0, pp2);
setTimeout(console.log, 0, pp3);

// 对于promise then、catch中的回调函数,新返回的promise对象是由Promise.resolve()返回的,对于决议值则由回调函数的返回值决定
const pFulfilled = Promise.resolve('fulfilled');
const pReject = Promise.reject('rejected');

const p1 = pFulfilled.then(); // 保持原样,和之前的结果相同. Promise<resolved> "fulfilled"
const p2 = pFulfilled.then(() => {}); // 新的promise = Promise.resolve(回调函数的返回值) Promise<resolved> undefined
const p3 = pFulfilled.then(() => undefined); // 新的promise = Promise.resolve(回调函数的返回值) Promise<resolved> undefined
const p4 = pFulfilled.then(() => Promise.resolve('新的决议值')); // 新的promise = Promise.resolve(回调函数的返回值) Promise<resolved> '新的决议值'

setTimeout(console.log, 0, p1);
setTimeout(console.log, 0, p2);
setTimeout(console.log, 0, p3);
setTimeout(console.log, 0, p4);

const p5 = pReject.then(); // 保持原样,和之前的结果相同 Promise<rejected> "rejected"
const p6 = pReject.then(null, () => {}); // 新的promise = Promise.resolve(回调函数的返回值) Promise<resolved> undefined
const p7 = pReject.then(null, () => undefined); // 新的promise = Promise.resolve(回调函数的返回值) Promise<resolved> undefined
const p8 = pReject.then(null, () => Promise.resolve('新的决议值')); // 新的promise = Promise.resolve(回调函数的返回值) Promise<resolved> 新的决议值
const p9 = pReject.then(null, () => Promise.reject('新的拒绝值')); // 新的promise = Promise.resolve(回调函数的返回值) Promise<rejected> 新的拒绝值

setTimeout(console.log, 0, p5);
setTimeout(console.log, 0, p6);
setTimeout(console.log, 0, p7);
setTimeout(console.log, 0, p8);
setTimeout(console.log, 0, p9);

//promise.finally 一般表现为父状态的传递,如果回调函数抛出异常或者返回rejected的promise,则返回拒绝状态的promise.pending状态的promise也是如此

const p10 = Promise.resolve('foo');
const p11 = p10.finally();
const p12 = p10.finally(() => {
  console.log('aiyaayyayya');
});
const p13 = p10.finally(() => Promise.resolve('9999'));
const p14 = p10.finally(() => Error('error'));

setTimeout(console.log, 0, p10); // finally表现为父契约的传递 Promise<resolved> "foo"
setTimeout(console.log, 0, p11); // finally表现为父契约的传递 Promise<resolved> "foo"
setTimeout(console.log, 0, p12); // finally表现为父契约的传递 Promise<resolved> "foo"
setTimeout(console.log, 0, p13); // finally表现为父契约的传递 Promise<resolved> "foo"
setTimeout(console.log, 0, p14); // finally表现为父契约的传递 Promise<resolved> "foo"

const p15 = p10.finally(() => {
  throw '抛出异常';
}); // Promise<rejected> "抛出异常"
const p16 = p10.finally(() => {
  return Promise.reject('最终拒绝');
}); // Promise<rejected> "最终拒绝"
setTimeout(console.log, 0, p15);
setTimeout(console.log, 0, p16);

const p17 = p10.finally(() => new Promise(() => {})); // Promise<pending>
setTimeout(console.log, 0, p17);
