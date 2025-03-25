function retry(fn, times) {
  try {
    return fn();
  } catch (error) {
    if (times > 0) {
      return retry(fn, times - 1);
    }
    throw error;
}

}
let failingPromise = () => {
  return new Promise((resolve, reject) => {
    Math.random() > 0.7 ? resolve("Thành công") : reject("Thất bại");
  });
};

retry(failingPromise, 3).then(console.log).catch(console.error);


