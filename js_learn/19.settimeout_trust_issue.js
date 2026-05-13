console.log("Start");

setTimeout(function cb() {
  console.log("Callback Function 1");
}, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While Expires");

console.log("Start");

setTimeout(function cb() {
  console.log("Callback Function 2");
}, 0);

console.log("End");

// Op ---> Start / End / Callback Function