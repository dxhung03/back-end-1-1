let n = 6;
let total = 0;
function getFibonacci(n){
  if(n === 0){
    return 0;
  }if(n === 1){
    return 1;
  } 
  return getFibonacci(n - 1) + getFibonacci(n - 2);
}
function getSum(n){
  for(let i = 0; getFibonacci(i) <= n; i++){
    total += getFibonacci(i);     
  }
  return total;
}
console.log(getSum(n));