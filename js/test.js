function reverse(str) {
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    const strArr = [];
    for (let j = 0; j < arr[i].length; j++) {
      strArr.push(arr[i][j]);
    }
    let str = "";
    let reverseArr = strArr.reverse();
    for (let i = 0; i < reverseArr.length; i++) {
      str += reverseArr[i];
    }
    arr[i] = str;
  }

  return arr.join(" ");
}
console.log(reverse("name age"));

// 0 1 2 3
