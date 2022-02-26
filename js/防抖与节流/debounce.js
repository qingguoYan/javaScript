/**
 * 防抖函数与节流函数
 * 防抖函数:在规定时间只执行一次任务,如果多次触发相同的任务,将重新计时
 * 节流函数:一段时间内只能执行一次
 * 重点:闭包、this、异步任务、定时器
 */

/**
 * 在等待时间内,如果持续触发防抖函数,防抖函数将把上一次的定时器任务清除
 * @param {任务函数} handler
 * @param {等待时间} wait
 */
function debounce(handler, wait) {
  let timer = null;
  return function () {
    let args = arguments;
    let context = this;
    if (timer) {
      clearTimeout(timer); //在wait时间内,再次触发事件,清除上一次的定时任务
    }
    timer = setTimeout(handler.apply(context, args), wait);
  };
}
