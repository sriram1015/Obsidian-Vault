// Event Listener

let count = 0;
document.getElementById("onClick").addEventListener("click", function xyz() {
  console.log("Button clicked", ++count);
});

//  Closure along with Event Listener

// function attachEvent() {
//   let count = 0;
//   document.getElementById("onClick").addEventListener("click", function xyz() {
//     console.log("Button clicked", ++count);
//   });
// }

// attachEvent();

//  Scope in the Element Panal.. event Listener...
