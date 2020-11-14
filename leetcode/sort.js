var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.prototype.bubbleSort = function (arr) {
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
            console.log("\u7B2C" + (i + 1) + "\u8F6E:" + arr);
        }
        return arr;
    };
    Sort.prototype.insertSort = function (arr) {
        for (var i = 1; i < arr.length; i++) {
            var j = i - 1;
            while (j >= 0) {
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
                j--;
            }
            console.log(arr);
        }
        return arr;
    };
    return Sort;
}());
var sort = new Sort();
console.log(sort.insertSort([8, 7, 6, 6, 5]));
// 8 7 6
// 7 8 6
// 7 6 8
