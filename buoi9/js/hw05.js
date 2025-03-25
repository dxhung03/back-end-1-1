const tasks = Array.from(
  { length: 10 },
  (_, i) => () =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve(`Task ${i + 1} hoàn thành`),
        Math.random() * 3000
      )
    )
);

const runWithLimit = async(tasks, limit) => {
  // Viết code ở đây
  
}

runWithLimit(tasks, 3).then(console.log);