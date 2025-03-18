const reviews = [
  { productId: "P1", userId: "U1", rating: 5 },
  { productId: "P2", userId: "U2", rating: 4 },
  { productId: "P1", userId: "U3", rating: 3 },
  { productId: "P3", userId: "U1", rating: 4 },
  { productId: "P2", userId: "U3", rating: 2 },
  { productId: "P1", userId: "U2", rating: 4 },
];

const averageRating = reviews.reduce((acc, cur) => {
  if (!acc[cur.productId]) {
    acc[cur.productId] = { total: 0, count: 0 };
  }
  acc[cur.productId].total += cur.rating;
  acc[cur.productId].count += 1;
  return acc;
}, {});

const avgRatings = Object.keys(averageRating).reduce((acc, productId) => {
  acc[productId] = (averageRating[productId].total / averageRating[productId].count);
  return acc;
}, {});

console.log(avgRatings);


const maxRating = Object.keys(avgRatings).reduce((max, productId) => 
  avgRatings[productId] > avgRatings[max] ? productId : max
);
console.log(maxRating);

// Nhóm danh sách đánh giá theo productId, trong đó mỗi sản phẩm có danh sách đánh giá của từng người dùng.

const groupReviews = {};
reviews.forEach((item) => {
  if(!groupReviews[item.productId]) {
    groupReviews[item.productId] = [];
  }
  groupReviews[item.productId].push(item.rating);
})
console.log(groupReviews);
