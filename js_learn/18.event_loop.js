// I.)
// console.log("Start");
// setTimeout(function cb() {
//   console.log("Hello");
// }, 5000);
// console.log("End");

// II.)
// console.log("Start");
// document.getElementById("onClick").addEventListener("click", function ab() {
//   console.log("Button Clicked");
// });
// console.log("End")

// III.)
console.log("Start");
setTimeout(function cbT() {
  console.log("call back SetTimeOut");
}, 5000);

fetch("https://api.github.com/users/sathiyaseelan0712").then((data) => {
  console.log("call back Function");
  console.log(data);
});
// 100000 lines
console.log("End");
