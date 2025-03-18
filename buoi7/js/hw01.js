const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 60 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];
//Lọc ra các sản phẩm thuộc danh mục "Electronics".
const categoryElectronics = products.filter((key) => {
  // console.log(key.category);
  return key.category === "Electronics";
});

console.log(categoryElectronics);

// Tính tổng giá của tất cả sản phẩm trong danh mục "Electronics".

const totalElectronics = (products) => {
  return products.filter((key) => {
  return key.category === "Electronics";
}).reduce((acc, cur) => {
  // console.log(cur.price);
  return acc + cur.price;
}, 0)};

console.log("Tong gia tri san pham = " + totalElectronics(products));

// Chuyển đổi mảng sản phẩm thành một object, trong đó key là category, value là mảng các sản phẩm thuộc danh mục đó.
const product = {};

products.forEach((item) => {
  const key = item.category;
  // console.log(key); 
  if(!product[key]){
    product[key] = [];
  }
  product[key].push(item)
});
console.log(product)

