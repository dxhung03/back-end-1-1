
const retryWithBackoff = async(fn, retries, delay) => {
  // Viết code ở đây
  const result = await fn();
  if (result === "Thành công!") {
    return result;
  } else {
    if (retries > 0) {
      return retryWithBackoff(fn, retries - 1, delay * 2);
    } else {
      return result;
    }
  };
}

const failingTask = () => {
  return new Promise((resolve, reject) => {
    Math.random() > 0.8
      ? resolve("Thành công!")
      : reject("Thất bại, thử lại...");
  });
};

retryWithBackoff(failingTask, 5, 1000).then(console.log).catch(console.error);