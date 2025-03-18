const orders = [
  {
    orderId: 101,
    customer: "John",
    items: [{ name: "Laptop", price: 1000, quantity: 1 }],
  },
  {
    orderId: 102,
    customer: "Alice",
    items: [
      { name: "Phone", price: 500, quantity: 2 },
      { name: "Charger", price: 50, quantity: 3 },
    ],
  },
  {
    orderId: 103,
    customer: "Bob",
    items: [{ name: "Headphones", price: 200, quantity: 2 }],
  },
];

// Tính tổng tiền của từng đơn hàng.

const totalOrder = orders.map((order) => {
  const item = order.items;
  // console.log(item);
  const total = item.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0);
  // console.log(total);
  
  return {orderId : order.orderId, customer : order.customer, total : total}
})

console.log(totalOrder);
// Tìm khách hàng có đơn hàng có tổng tiền cao nhất.

const maxOrder = totalOrder.reduce((acc, cur) => acc.total > cur.total ? acc : cur);
console.log(maxOrder);

// Gộp danh sách tất cả các sản phẩm từ các đơn hàng, nhóm theo tên sản phẩm và tính tổng số lượng của mỗi sản phẩm.

const product = orders.reduce((acc, cur) => {
  const item = cur.items;
  console.log(item);
  item.forEach((product) => {
    acc[product.name] = acc[product.name] ? acc[product.name] + product.quantity : product.quantity;
  });
  return acc;
}, {});

console.log(product);