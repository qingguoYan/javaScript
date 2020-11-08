/**
 * js并发限制调度器
 */

class Scheduler {
  constructor(limitSize) {
    this.limitSize = limitSize;
    this.queue = [];
    this.processQueue = [];
  }
  addTask = (task) => {
    this.queue.push(task);
    this.run();
  };
  run = () => {
    while (this.queue.length > 0 && this.processQueue.length < this.limitSize) {
      const task = this.queue.shift();
      const promise = task().then(() => {
        const index = this.processQueue.indexOf(promise);
        this.processQueue.splice(index, 1);
        this.run();
      });
      this.processQueue.push(promise);
    }
  };
}

const createTask = function (time, order) {
  return () =>
    new Promise((resolve) => setTimeout(resolve, time)).then(() =>
      console.log(order)
    );
};

var scheduler = new Scheduler(2);
scheduler.addTask(createTask(4000, "1"));
scheduler.addTask(createTask(500, "2"));
scheduler.addTask(createTask(500, "3"));
scheduler.addTask(createTask(400, "4"));
scheduler.addTask(createTask(300, "5"));
scheduler.addTask(createTask(300, "6"));
