/**
 * 实现一个promise.some函数
 */

function some(tasks, limit) {
  let queue = [];
  let pendingQueue = [];

  for (let task of tasks) {
    queue.push(new Promise((resolve) => setTimeout(resolve(task), 0)));
  }

  while (pendingQueue.length <= limit) {
    const promise = queue.shift();
    promise.then((res) => {
      console.log(res);
      pendingQueue.push(promise);
    });
  }
}
