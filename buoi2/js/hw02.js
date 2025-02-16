let n = 10;

function getSum(n){
  if(n === 1){
    return 1;
  }
  return getSum(n - 1) + n;
}

console.log(getSum(n));

