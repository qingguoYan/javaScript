/**
 * 栈对象
 */

class MyStack {
  constructor() {
    this.stack = [];
    this.count = 0;
  }

  push(value) {
    this.stack.push(value);
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return console.log("stack is empty arr");
    }
    this.stack.pop();
    this.count--;
  }

  peek() {
    const newStack = [...this.stack];
    return newStack.pop();
  }
}
