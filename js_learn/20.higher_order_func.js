// function x() {
//   console.log("Hello world");
// }

// function y(x) {
//   x();
// }

const radius = [3, 2, 4, 5];

// function area(a) {
//   return Math.PI * a * a;
// }

// const calculateArea = function (radius, func) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(func(radius[i]));
//   }
//   return output;
// };
// console.log(calculateArea(radius, area));

// const calculatePerimeter = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };
// console.log(calculatePerimeter(radius));

// const calculateDiameter = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };
// console.log(calculateDiameter(radius));

const area = function (radius) {
  return Math.PI * radius * radius;
};
const perimeter = function (radius) {
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (logic) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};

// Array.prototype.calculatePro = function (logic) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]));
//   }
//   return output;
// };

// console.log(radius.map(area));
// console.log(radius.calculatePro(area));

console.log(calculate(radius, area));
console.log(calculate(radius, perimeter));
console.log(calculate(radius, diameter));
