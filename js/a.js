// // 执行组合排列的函数
// function doExchange(arr) {
//   var len = arr.length;
//   // 当数组大于等于2个的时候
//   if (len >= 2) {
//     // 第一个数组的长度
//     var len1 = arr[0].length;
//     // 第二个数组的长度
//     var len2 = arr[1].length;
//     // 2个数组产生的组合数
//     var lenBoth = len1 * len2;
//     //  申明一个新数组,做数据暂存
//     var items = new Array(lenBoth);
//     // 申明新数组的索引
//     var index = 0;
//     // 2层嵌套循环,将组合放到新数组中
//     for (var i = 0; i < len1; i++) {
//       for (var j = 0; j < len2; j++) {
//         // items[index] = arr[0][i] + arr[1][j];
//         items[index] = Object.assign({}, arr[0][i], arr[1][j]);
//         index++;
//       }
//     }
//     // 将新组合的数组并到原数组中
//     var newArr = new Array(len - 1);
//     for (var i = 2; i < arr.length; i++) {
//       newArr[i - 1] = arr[i];
//     }
//     newArr[0] = items;
//     // 执行回调
//     return doExchange(newArr);
//   } else {
//     return arr[0];
//   }
// }

// //执行
// // var array = [
// //   ['{ 材质: "软膜" }', '{ 材质: "挂画" }'],
// //   ['{ 尺寸: "2000mm*2000mm" }', '{ 尺寸: "1000mm*1000mm" }'],
// //   ['{ 适用: "卡布" }', '{ 适用: "壁挂" }'],
// // ];

// var array = [
//   [{ 材质: "软膜" }, { 材质: "挂画" }],
//   [{ 尺寸: "2000mm*2000mm" }, { 尺寸: "1000mm*1000mm" }],
//   [{ 适用: "卡布" }, { 适用: "壁挂" }],
// ];

// console.log(doExchange(array));
let arr = [1, 2, 3];
let arr2 = arr;
arr = [];

console.log(arr);
console.log(arr2);

let obj = { name: "yqg" };
let obj2 = obj;
obj = {}; //在这里进行新的赋值，obj2仍然指向{name:"yqg"}
// obj.name = "sss";
console.log(obj);
console.log(obj2);
