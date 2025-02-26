let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const n = 2;
const newArr = [];
for (let index in numbers) {
  if (+index === n) {
    continue;
  }
  newArr[newArr.length] = numbers[index];
}
console.log(newArr);