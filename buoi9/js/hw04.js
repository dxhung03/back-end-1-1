const tasks = [
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Task 1 hoàn thành"), 2000)
    ),
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Task 2 hoàn thành"), 1000)
    ),
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Task 3 hoàn thành"), 1500)
    ),
];
const runInSequence = async(tasks) => {
  // Viết code ở đây 
  for (const task of tasks) {
    const data = await task();
    console.log(data);
  }
}

runInSequence(tasks).then(console.log);


