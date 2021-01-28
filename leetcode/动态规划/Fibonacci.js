/**
 * 斐波那契数列  0 1 1 2 3 5 8 ...
 */

/**
 * 从上往下 暴力递归 时间复杂度指数级 o(2^n) 会重复计算
 */
function solution1(n) {
  if (n < 0) return 0;
  if (n === 0) return 0;
  if (n === 1) return 1;
  return solution1(n - 1) + solution1(n - 2);
}

console.log(solution1(8));

/**
 * 从上往下 递归+备忘录 时间复杂度o(n)
 */
function solution2(n) {
  const arr = new Array(n);
  return dp(arr, n);
  function dp(arr, n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (arr[n]) {
      return arr[n];
    } else {
      return (arr[n] = dp(arr, n - 1) + dp(arr, n - 2));
    }
  }
}
console.log(solution2(8));

/**
 * 从下往上 遍历+动态规划 时间复杂度o(n)
 */
function solution3(n) {
  const arr = new Array(n);
  arr[0] = 0;
  arr[1] = 1;
  for (i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}
console.log(solution3(8));

/**
 * 从下往上 遍历+动态规划+优化空间 时间复杂度o(n)
 */
function solution4(n) {
  let pre = 0;
  let cur = 1;
  let next;
  for (let i = 2; i <= n; i++) {
    next = pre + cur;
    pre = cur;
    cur = next;
  }
  return cur;
}
console.log(solution4(8));
