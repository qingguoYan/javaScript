/**
 * 凑零钱问题，给k种不同面额的硬币coins，硬币数量不限,总额amount,问最少需要几个硬币就可以凑够总额
 */

/**
 * 暴力递归
 * @param {硬币面额} coins
 * @param {总额} amount
 */
let count = 0;
function solution(coins, amount) {
  // coins : [1,2,5] amount : 100;
  function dp(amount) {
    count++;
    let res = Number.MAX_SAFE_INTEGER;
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    for (let c of coins) {
      subproblem = 1 + dp(amount - c);
      if (subproblem === -1) continue;
      res = subproblem < res ? subproblem : res;
    }
    return res;
  }
  return dp(amount);
}

console.log(solution([1, 2, 5], 20));

/**
 * 递归+备忘录
 */
function solution2(coins, amount) {
  const map = {};
  function dp(amount) {
    if (map[amount]) return map[amount];
    let res = Number.MAX_SAFE_INTEGER;
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    for (let c of coins) {
      subproblem = 1 + dp(amount - c);
      if (subproblem === -1) continue;
      res = subproblem < res ? subproblem : res;
    }
    map[amount] = res;
    return res;
  }
  return dp(amount);
}
console.log(solution2([1, 2, 5], 20));
console.log(count);

/**
 * 从下往上迭代
 */
function solution3(coins, amount) {
  const map = {};
  map[0] = 0;
  for (let i = 0; i <= amount; i++) {
    for (let c of coins) {
      if (i - c < 0) continue;
      map[i] = 1 + map[i - c];
    }
  }
  console.log(map[amount]);
}

solution3([1, 2, 5], 19);
