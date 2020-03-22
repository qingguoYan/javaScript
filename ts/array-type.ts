/**
 * 数组与原数组
 */

let array: string[];
array = ["1", "2", "3"];

let array2: Array<number> = [1, 2, 3];
// array2.push("2"); //不能push进字符串类型，只能添加number类型

let yArray: [string, number] = ["s", 2]; //元素对应的位置类型必须一致,并且元素不能少不能多
