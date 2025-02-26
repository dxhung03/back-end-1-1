let arr = [0,-1,11,3,4,2,9,15];

const sortDecrease = function(arr){
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let value = -10;
function insertSort(arr, value) {
  const newArr = [];
  inserted = false;
  for (let i = 0; i < arr.length; i++) {
      if (!inserted && value > arr[i]) {
          newArr[newArr.length] = value;
          inserted = true;
      }
      newArr[newArr.length] = arr[i];
  }
  if (!inserted) {
    newArr[newArr.length] = value;
  }
  return newArr;
}
console.log(sortDecrease(arr))
console.log(insertSort(sortDecrease(arr), value));
