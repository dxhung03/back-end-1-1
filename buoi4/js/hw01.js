let arr = [0,-1,2,5,8,9];
const findMin = function (arr) { 
  let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
const findMax = function (arr) { 
  let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
          max = arr[i];
        }
    }
    return max;
}
console.log(findMin(arr));
console.log(findMax(arr));