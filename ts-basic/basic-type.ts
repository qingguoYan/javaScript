const num: number = 123;
const binaryNum: number = 0b111; //二进制数

const str: string = "qingguoYan";
const strName: string = `my name is ${str}`;

const bol: boolean = false;

const un: undefined = undefined;

const nu: null = null;

/**
 * undefined与null是任何类型的子类型
 */

let number: number = undefined;

/**
 * undefined与null的区别,null代表空对象，转为数值为数字0，undefined代表此处无定义，转为数值时为NaN
 */

console.log(typeof null); //object
console.log(typeof undefined); //undefined

console.log(Number(null)); // 0
console.log(Number(undefined)); //NaN
