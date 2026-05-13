function x(){
    var i = 1;
    setTimeout(()=>{console.log(i)},5000);
}
x();

// function a(){
//     for(var i = 1; i <= 5; i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
// }
// a(); //6 6 6 6 6

// function a() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// a(); // 1 2 3 4 5

// function a() {
//   for (var i = 1; i <= 5; i++) {
//     function x(j) {
//       setTimeout(function () {
//         console.log(j);
//       }, j* 1000);
//     }
//     x(i);
//   }
// }

// a(); // 1 2 3 4 5


console.log("Start");
setTimeout(function ab() {
  console.log("4000 ms later");
},4000);

console.log("Start 2");
setTimeout(function ab() {
  console.log("5000 ms later");
},5000);

var start = new Date().getTime();
var date = new Date().getTime();
while (date - start < 3000) {
  date = new Date().getTime();
}

console.log("Start 3");
setTimeout(function ab() {
  console.log("7000 ms later");
},7000);

console.log("Start 4");
setTimeout(function ab() {
  console.log("1000 ms later");
},1000);
console.log("End");