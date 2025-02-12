let kWh = 51;

let PRICE1 = 1678;
let PRICE2 = 1734;
let PRICE3 = 2014;
let PRICE4 = 2536;
let PRICE5 = 2834;
let PRICE6 = 2927;

let RANGE1 = 1;
let RANGE2 = 50;
let RANGE3 = 100;
let RANGE4 = 200;
let RANGE5 = 300;
let RANGE6 = 400;
let money;

if(kWh >= RANGE1 && kWh <= RANGE2){
  money = kWh*PRICE1;
}else if(kWh <= RANGE3){
  money = PRICE1*RANGE2 + PRICE2*(kWh-RANGE2);
}else if(kWh <= RANGE4){
  money = PRICE1*RANGE2 + PRICE2*RANGE2 + PRICE3*(kWh - RANGE3);
}else if (kWh <= RANGE5){
  money = PRICE1*RANGE2 + PRICE2*RANGE2 + PRICE3*RANGE3 + PRICE4*(kWh - RANGE4);
}else if (kWh <= RANGE6){
  money = PRICE1*RANGE2 + PRICE2*RANGE2 + PRICE3*RANGE3 + PRICE4*RANGE3 + PRICE5*(kWh - RANGE5);
}else {
  money = PRICE1*RANGE2 + PRICE2*RANGE2 + PRICE3*RANGE3 + PRICE4*RANGE3 + PRICE5*RANGE3 + PRICE6*(kWh - RANGE6);
}

console.log(money)