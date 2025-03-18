const students = [
  { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
  { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
  { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
];
// Tính điểm trung bình của từng học viên.
// console.log(Object.values(students));

const averageScores = students.map((student) => {
  // console.log(student);
  const key = Object.values(student.scores);
  const sum = key.reduce((total, num) => total + num);
  // console.log(sum/3);   
  return {id : student.id, name : student.name, average : sum/key.length};
})
console.log(averageScores);

// Tìm học viên có điểm trung bình cao nhất.
const maxAverage = averageScores.reduce((max, num) => {
  // console.log(num.average);
  // console.log(max.average);
  return max.average > num.average ? max : num
}, 0);
console.log(maxAverage);

// Sắp xếp danh sách học viên theo điểm trung bình giảm dần.

const sort = averageScores.sort((a, b) => {
  return b.average - a.average;
});

console.log(sort);

