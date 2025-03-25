function PromiseTimeout  (promise, ms) {
  // Viết code ở đây

  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Timeout Error!");
    }, ms);
  });
  return Promise.race([promise, timeout]);
}

const longTask = new Promise((resolve) =>
  setTimeout(() => resolve("Xong!"), 2000)
);

PromiseTimeout(longTask, 2000).then(console.log).catch(console.error);