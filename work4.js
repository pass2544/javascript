function totalVolume(arr) {
    var total = 0;
    for (let i = 0; i < arr.length; i++) {
        var mul = 1;
        for (let o = 0; o < arr[i].length; o++) {
            mul *= arr[i][o];
        }
        total += mul;
    }
    return total;
}

var arr1 = [1, 1, 1];
var arr2 = [2, 2, 2];
var arr3 = [2, 1, 1];
var arr4 = [4, 2, 4];
var arr5 = [3, 3, 3];
var arr6 = [1, 1, 2];

var a = [arr3, arr4, arr5, arr6];
var b = [arr2, arr3];
var c = [arr1];
console.log(totalVolume(a));
console.log(totalVolume(b));
console.log(totalVolume(c));