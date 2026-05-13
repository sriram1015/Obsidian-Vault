// --------------Promise.all()-------

const p1 = new Promise(function (resolve, reject) {
  //   setTimeout(() => resolve("P1 success"), 3000);
  setTimeout(() => reject("P1 Fail"), 3000);
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("P2 Fail"), 1000);
  //   setTimeout(() => resolve("p2 success"), 1000);
});
const p3 = new Promise(function (resolve, reject) {
  //   setTimeout(() => resolve("P3 success"), 2000);
  setTimeout(() => reject("P3 Fail"), 2000);
});

// Promise.all([ , p2, p3])
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// Promise.allSettled([p1, p2, p3])
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// Promise.race([p1, p2, p3])
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

Promise.any([p1, p2, p3])
  .then(function (data) {
    console.log(data);
  })
  .catch((err) => console.log(err.errors));
