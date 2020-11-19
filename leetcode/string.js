var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    //找出一个字符串的元音数量
    StringUtils.prototype.countVowels = function (str) {
        var vowels = ["a", "e", "i", "o", "u"];
        var count = 0;
        for (var _i = 0, _a = str.toLocaleLowerCase(); _i < _a.length; _i++) {
            var c = _a[_i];
            if (vowels.includes(c))
                count++;
        }
        return count;
    };
    //反转一个字符串
    StringUtils.prototype.reverse = function (str) {
        var reverseArr = [];
        for (var i = str.length - 1; i >= 0; i--) {
            reverseArr.push(str[i]);
        }
        return reverseArr.join("");
    };
    //反转一个字符串语句 i love you -> you love i
    StringUtils.prototype.reverseWord = function (str) {
        var arr = str.split(" ");
        console.log(arr);
        var arr2 = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            arr2.push(arr[i]);
        }
        return arr2.join(" ");
    };
    //删除重复的字符 aabbcc -> abc
    StringUtils.prototype.removeDuplicates = function (str) {
        var arr = [];
        for (var i = 0; i < str.length; i++) {
            if (!arr.includes(str.charAt(i)))
                arr.push(str.charAt(i));
        }
        return arr.join("");
    };
    //找到字符串出现次数最多的字符
    StringUtils.prototype.findMostStr = function (str) {
        var obj = {};
        for (var i = 0; i < str.length; i++) {
            if (Object.keys(obj).includes(str.charAt(i))) {
                obj[str.charAt(i)] = obj[str.charAt(i)] + 1;
            }
            else {
                obj[str.charAt(i)] = 1;
            }
        }
        var maxCount = 0;
        var maxStr = '';
        for (var key in obj) {
            if (obj[key] > maxCount) {
                maxCount = obj[key];
                maxStr = key;
            }
        }
        return maxStr;
    };
    //将每个字符串首字符大写
    StringUtils.prototype.capitailize = function (str) {
        var arr = str.split(" ");
        console.log(arr.entries().next());
        for (var _i = 0, _a = arr.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], index = _b[0], value = _b[1];
            console.log(index);
            if (value) {
                arr[index] = value[0].toLocaleUpperCase() + value.substr(1);
            }
        }
        return arr.join(" ");
    };
    //判断回文字符串 ABBA
    StringUtils.prototype.isPalindrome = function (str) {
        var left = 0;
        var right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right])
                return false;
            left++;
            right--;
        }
        return true;
    };
    return StringUtils;
}());
var strUtils = new StringUtils();
// console.log(strUtils.countVowels("yanqingguoO"));
// console.log(strUtils.reverse("yanqingguoO"));
// console.log(strUtils.reverseWord("  yan qing  guo  "));
// console.log(strUtils.removeDuplicates("aabb cc"));
// console.log(strUtils.findMostStr("aaaabbbbccc"));
// console.log(strUtils.capitailize("yan qing guo ! como on !"));
console.log(strUtils.isPalindrome("ABAABA"));
