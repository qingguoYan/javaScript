var Search = /** @class */ (function () {
    function Search() {
    }
    Search.prototype.binarySearch = function (arr, target) {
        //[ 0,1 ,2,3,4,5,6,7,8]
        var left = 0;
        var right = arr.length - 1;
        while (left <= right) {
            console.log((left + right) / 2);
            var middle = parseInt((String((left + right) / 2)));
            console.log(middle);
            if (arr[middle] === target)
                return middle;
            if (arr[middle] < target)
                left = middle + 1;
            if (arr[middle] > target)
                right = middle - 1;
        }
        return -1;
    };
    Search.prototype.binarySearchRec = function (arr, target) {
        function search(arr, target, left, right) {
            if (left > right)
                return -1;
            var middle = parseInt((String((left + right) / 2)));
            if (arr[middle] === target)
                return middle;
            if (arr[middle] < target)
                return search(arr, target, middle + 1, right);
            return search(arr, target, left, middle - 1);
        }
        return search(arr, target, 0, arr.length - 1);
    };
    return Search;
}());
var search = new Search();
console.log(search.binarySearchRec([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
