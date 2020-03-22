/**
 * 函数类型以及类型推论
 */

//声明式函数
function add(x: string, y: string): string {
  return x + y;
}

add("1", "2"); //参数不能多不能少

//函数表达式

const speak = function(x: string, y: boolean, z: number = 1): string | number {
  if (y) {
    return x;
  } else {
    return z;
  }
};

speak("hello", true);
