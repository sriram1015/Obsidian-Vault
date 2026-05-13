// Simple closure example

// 1.
// function outer(){
//     var a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// outer()();
// var ans = outer();
// ans();

// 2.
// function outer(){
//     function inner(){
//         console.log(a);
//     }
//     var a = 10;
//     return inner;
// }
// var ans = outer();
// ans();

//  Double parenthesis do?
//  calling the inner func;
// line no 9 can call the outer func it return the inner func and then call the inner func()

// 3.
// function outer(){
//     function inner(){
//         console.log(a);
//     }
//     let a = 10;
//     return inner;
// }
// var ans = outer();
// ans();
//  let is block scope, it is possible

// 4.
// function outer(b) {
//   function inner() {
//     console.log(a,b);
//   }
//   let a = 10;
//   return inner;
// }
// var ans = outer("Sathiyaseelan");
// ans();

//5. - relation of scope chain and closure
// function outest() {
//   var c = 20;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     let a = 10;
//     return inner;
//   }
//   return outer;
// }
// var ans = outest()("Sathiyaseelan");
// ans();

// 6. Global conflicting name
// function outest() {
//   var c = 20;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     let a = 10;
//     return inner;
//   }
//   return outer;
// }
// let a = 100;
// var ans = outest()("Sathiyaseelan");
// ans();

//7. data hiding using closure
function counter(){
    var count = 0;
    return function increment(){
        count++;
        console.log(count);
    }
}

var counter1 = counter();
counter1();
counter1();
counter1();
counter1();
counter1();
