/**
 * 接口可以对对象的形状进行描述
 */

interface MyCat {
  readonly id: number;
  name: string;
  age: number;
  color?: string;
}

let cat: MyCat = {
  id: 1,
  name: "小花",
  age: 2,
  color: "yellow"
};
