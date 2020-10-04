const { timeStamp } = require("console");

async function test() {
  await 1;
  await 2;
  return 3;
}

console.log(test().then((res) => console.log(res))); // 3
