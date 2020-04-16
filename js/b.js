var array = [
  { 材质: "贴纸" },
  { 尺寸: "1000mm*1000mm" },
  { 适用: "卡布" },
  { 适用: "壁挂" },
  { 尺寸: "2000mm*2000mm" },
  { 材质: "挂画" },
];
const obj = {},
  newArr = [];
array.forEach(function (item, suffix) {
  //根据对象的属性是唯一的，将值作为对象的属性名
  if (!obj[Object.keys(item)[0]]) {
    var arr = [];
    arr.push(item);
    newArr.push(arr);
    obj[Object.keys(item)[0]] = item;
  } else {
    newArr.forEach(function (value, index) {
      //如果已经存在  就循环新组的值将值插入属性相同的数组里   为了防止重复添加   只要和第一个比较就可以了
      if (Object.keys(value[0])[0] == Object.keys(item)) {
        value.push(item);
      }
    });
  }
});
// console.log(obj);
console.log(newArr);
