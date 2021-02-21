function findFirstNodeWithKeyWord(keyword) {
  const queue = []; //duilie
  // const node = root;
  queue.push(root);
  while (queue.length !== 0) {
    //判断出队列的node 是否是 keyWord
    const node = queue.shift();
    if (node === keyword) return node;
    const nodes = node.children;
    for (let i = 0; i < nodes.length; i++) {
      queue.push(nodes[i]);
    }
  }
}

//重复的定时器

function mySetInterval(fn, time) {
  function run() {
    fn();
    setTimeout(run, time);
  }
  setTimeout(run, time);
}

//函数节流
function throttle(fn, time) {
  let timer = null;
  return function () {
    if (!timer) {
      fn();
    }
    timer = setTimeout(() => {
      timer = null;
    }, time);
  };
}

function throttle2(fn, time) {
  let last = 0;
  return function () {
    let now = new Date().getTime();
    if (now - last > time) {
      fn();
    }
    last = now;
  };
}

//函数防抖
function debounce(fn, time) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(fn, time);
    }
  };
}
