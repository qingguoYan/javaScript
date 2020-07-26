class Queue {
  constructor(length) {
    this.queue = new Array(length);
    this.head = -1;
    this.tail = -1;
    this.size = length;
  }

  getFront() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[this.head];
  }

  getRear() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[this.tail];
  }

  enQueue(value) {
    if (this.isFull()) {
      return false;
    }
    if (this.isEmpty()) {
      this.head = 0;
    }
    this.tail = (this.tail + 1) % this.size; //这个地方很巧妙，循环的去往队列放入值
    this.queue[this.tail] = value;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) {
      return false;
    }
    if (this.tail === this.head) {
      this.tail = -1;
      this.head = -1;
      return true;
    }
    this.head = (this.head + 1) % this.size;
    return true;
  }

  isFull() {
    return (this.tail + 1) % this.size === this.head;
  }

  isEmpty() {
    return this.head === -1;
  }
}

const queue = new Queue(1);

console.log(queue.isEmpty());
