"use strict";

//  this in global scope
console.log(this); // Global Object is window in browser, in nodejs it is globa;
// this === window  // true;
//  this keyword in the global space repersents global object

// this inside a function
function x() {
  // THE VALUE DEPENDS ON STRICT / NON STRICT MODE
  console.log(this);
}
x();

// this inside non-strict mode - (this substitution)

/**
 * If the value of this window is undefined or null
 * this keyword will be replaced with globalObject
 * only in non -  strict mode
 */

// this keyword value  depends on how the function is called(window)
window.x();

// this inside a object's method

const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};

obj.x();

// call apply bind method(sharing methods)

let printName = function () {
  return console.log(this.name);
};
const student = {
  name: "Sathiyaseelan",
  printName: function () {
    console.log(this.name);
  },
};
printName.call(student);

const student2 = {
  name: "Yashicas",
};

printName.call(student2);

// this inside the arrow function

const object = {
  a: 10,
  y: () => {
    console.log(this.x);
  },
};
object.y();

//  this inside the nested arrow function
const object2 = {
  a: 10,
  x1: function () {
    // console.log(this);
    const y = () => {
      console.log(this);
    };
    y();
  },
};
object2.x1();
