const watchHistory = [
  { userId: 1, videoId: "A1", duration: 10 },
  { userId: 2, videoId: "B1", duration: 15 },
  { userId: 1, videoId: "A1", duration: 20 },
  { userId: 3, videoId: "C1", duration: 30 },
  { userId: 2, videoId: "B1", duration: 5 },
  { userId: 1, videoId: "A2", duration: 25 },
  { userId: 3, videoId: "C1", duration: 15 },
];
// Viết các hàm thực hiện các yêu cầu sau:

// Tính tổng thời gian xem của từng video.

const totalWatchTime = watchHistory.reduce((acc, cur) => {
  if (!acc[cur.videoId]) {
    acc[cur.videoId] = 0; 
  }
  acc[cur.videoId] += cur.duration;
  return acc;
},{})
console.log(totalWatchTime);
// Tìm video được xem nhiều nhất (dựa trên tổng thời gian).

const maxWatchTime = watchHistory.reduce((acc, cur) => {
  // console.log(cur.duration);
  return acc > cur.duration ? acc : cur.duration;
},{})
console.log(maxWatchTime);
// Nhóm lịch sử xem theo userId, trong đó mỗi userId sẽ chứa danh sách các video mà họ đã xem và tổng thời gian xem mỗi video.
const groupWatchHistory = {};
watchHistory.forEach((item) => {
  // console.log(groupWatchHistory[item.userId]);
  
  if(!groupWatchHistory[item.userId]){
    groupWatchHistory[item.userId] = [];
  }
  groupWatchHistory[item.userId].push(item)
})

console.log(groupWatchHistory);
