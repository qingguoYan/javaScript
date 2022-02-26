// 定时器版本
function throttle(fn, delay) {
  let timer = null;
  return function () {
    const args = [].slice.call(arguments);
    if (!timer) {
      fn.apply(this, args);
    }
    timer = setTimeout(() => {
      timer = null;
    }, delay);
  };
}

// 时间戳版本
function throttle(fn, delay) {
  let last = 0;
  return function () {
    let now = performance.now();
    if (now - last > delay) {
      last = now;
      const args = [].slice.call(arguments);
      fn.apply(this, args);
    }
  };
}
