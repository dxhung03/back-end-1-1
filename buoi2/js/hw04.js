function makeCalculate(a, b , cal){
  return cal(a, b);
}

function getSum(a, b){
  return a + b;
}

function getSub(a, b){
  return a - b;
}

function getMul(a, b){
  return a * b;
}

function getDiv(a, b){
  if(b === 0){
    return false;
  }
  return a / b;
}
console.log(makeCalculate(10, 2, getSum));
console.log(makeCalculate(10, 2, getSub));
console.log(makeCalculate(10, 2, getMul));
console.log(makeCalculate(10, 0, getDiv));

