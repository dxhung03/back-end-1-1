const transactions = [
  { id: 1, account: "A", type: "deposit", amount: 1000 },
  { id: 2, account: "B", type: "withdraw", amount: 200 },
  { id: 3, account: "A", type: "withdraw", amount: 500 },
  { id: 4, account: "C", type: "deposit", amount: 700 },
  { id: 5, account: "B", type: "deposit", amount: 300 },
];


const balances = {};

  transactions.forEach((item) => {
    if (!balances[item.account]) {
      balances[item.account] = 0;
    }
    balances[item.account] += item.type === "deposit" ? item.amount : -item.amount;
  });

console.log(balances);


const maxBalance = Object.entries(balances).reduce((acc, cur) => (cur.account > acc.account ? cur : acc));

console.log(maxBalance);


const groupTransactions = {};
transactions.forEach((item) => {
  
  if (!groupTransactions[item.account]) {
    groupTransactions[item.account] = [];
  }
  groupTransactions[item.account].push(item);
});
console.log(groupTransactions);