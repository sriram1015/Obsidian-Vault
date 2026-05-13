// // function Statement

// function a() {
//   console.log("Hello Sathiyaseelan");
// }

// // Function expression

// var b = function () {
//   console.log("Function expression");
// };

// //  function Declaration
// // it is also known as the function Statement

// // Anonymous function --  function without a name
// // function (){
// // -- Syntax Error
// // }
// // does not have the own identity

// // Named function Expression
// console.log(sample);
// var sample = function xyz() {
//   console.log(xyz);
// };
// sample();
// xyz(); // // xyz(); // ReferenceError: 'xyz is not defined'

// First class function
var b = function (param1) {
  console.log(param1);
  return function () {
    console.log("Inner function called");
  };
};

function xyz() {
  console.log("xyz function called");
}

b(xyz);

// Array function