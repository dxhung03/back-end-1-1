function fetchUser() {
  return new Promise((resolve) => setTimeout(() => resolve("User Data"), 2000));
}

function fetchPosts() {
  return new Promise((resolve) => setTimeout(() => resolve("Post Data"), 3000));
}

function fetchComments() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Comment Data"), 1000)
  );
}
const start = Date.now();

const promiseArray = [fetchUser(), fetchPosts(), fetchComments()];
Promise.all(promiseArray).then((data) => {
  console.log(data);
});

Promise.all(promiseArray).then((data) => {
 const end = Date.now();
 console.log((end - start)/1000);
});



