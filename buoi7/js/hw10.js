const inventory = [
  { item: "Laptop", type: "import", quantity: 10 },
  { item: "Mouse", type: "import", quantity: 50 },
  { item: "Laptop", type: "export", quantity: 4 },
  { item: "Keyboard", type: "import", quantity: 20 },
  { item: "Mouse", type: "export", quantity: 10 },
];


const stock = {};
  
  inventory.forEach((key) => {
    if (!stock[key.item]) {
      stock[key.item] = 0;
    }
    stock[key.item] += key.type === "import" ? key.quantity : -key.quantity;
  });

console.log(stock);

const find = Object.entries(stock).reduce((acc, cur) => {
  return cur[1] > acc[1] ? cur : acc
});
console.log(find);


const grouped = {};
  
  inventory.forEach((key) => {
    if (!grouped[key.item]) {
      grouped[key.item] = [];
    }
    grouped[key.item].push(key);
  });

console.log(grouped);