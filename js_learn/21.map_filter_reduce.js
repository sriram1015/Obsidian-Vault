const arr = [5, 1, 3, 6, 2];

// ------------------I.) Map funciton--------------------
// function double(x) {
//   return x * 2;
// }
// function triple(x) {
//   return x * 3;
// }
// function binary(x) {
//   return x.toString(2);
// }

// const output = arr.map(double);
// const output = arr.map(triple);
// const output = arr.map(bianry);
// const output = arr.map((x) => {
//   return x * 4;
// });
// console.log(output);

// --------------------II.) Filter ---------------------------
// function isOdd(x) {
//   return x % 2;
// }
// function isEven(x) {
//   return x % 2 === 0;
// }
// function isGreaterThan4(x) {
//   return x > 4;
// }

// const output = arr.filter(isOdd);
// const output = arr.filter(isEven);
// const output = arr.filter((x) => x > 4);
// console.log(output);

// --------------III.) Filter -----------------
// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(findSum(arr));

// const output = arr.reduce(function (arr, curr) {
//   arr += curr;
// }, 0);
// const output = arr.reduce((sum, curr) => sum + curr);
// console.log(output);

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     max = Math.max(max, arr[i]);
//   }
//   return max;
// }
// console.log(findMax(arr));

// // const output = arr.reduce(function (arr, curr) {
// //   arr += curr;
// // }, 0);
// const output = arr.reduce((max, curr) => Math.max(max, curr), 0);
// console.log(output);
