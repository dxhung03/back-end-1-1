let n = -1;
let total = 0;
function getSum(n){
  if(n <= 0){
    return 'Gia tri khong dung';
  }
  for(let i=1; i<=n ; i++){
    total += i / n;
  }
  return total;
}

console.log(getSum(n));