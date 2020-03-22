/**
 * 联合类型，定义的属性可以为多个类型
 */

let stringOrNumber: number | string = 123;
stringOrNumber = "123";
//  stringOrNumber = false; //编译器会报错
