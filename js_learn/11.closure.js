//  Basic JavaScript Closure Example
var c = 100;
function x() {
  var a = 10,
    b = 20;
    console.log(c);
  function y() {
    console.log(a);
    console.log(c);
  }
  y();
}
x();

// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// var z = x();
// console.log(z);
// ..... //  1000 lines
// z();

// cool developer
// function x() {
//   var a = 10;
//   return function y() {
//     console.log(a);
//   }
// }

// var z = x();
// console.log(z);
// // ..... //  1000 lines
// z();

// function x() {
//   var a = 10;
//   function y() {
//     var b = 20;
//     function z() {
//       console.log(a, b);
//     }
//     z();
//   }
//   y();
// }
// x();
