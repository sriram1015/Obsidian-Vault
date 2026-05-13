let a = 10;
let b = "Hello World";
let c = true;
let d;
let e = null;
let f = undefined;

console.log(typeof a); // number
console.log(typeof b); // sting
console.log(typeof c); // boolean
console.log(typeof d); // undefined
console.log(typeof e); // object
console.log(typeof f); // undefined
console.log(typeof (c / e)); // number
console.log(typeof (a / e)); // number
console.log(typeof (c / e)); // number
console.log(typeof (a / 0)); // number
console.log(typeof (b / 0)); // number
console.log(typeof NAN); // undefinedI
console.log(typeof this); // Object
console.log(typeof (null + 1)); //number
console.log(typeof ("5" + 3)); // string
console.log("5" + 3); // 53
console.log(typeof ("5" - 3)); //number
console.log("5" - 3); // 2
console.log(typeof Infinity); // number
console.log([] + []); // empty list
console.log([] + {}); //[object Object]

// -----------------------------------
// let a = 10;
// let b = "hello";
// let c = 30.4;
// let d;
// let e = null;
// let f = undefined;

// console.log(true);  //true
// console.log(true + true); // 2
// console.log(true + false); // 1
// console.log(false + true); // 1
// console.log(false + false); // 0

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);

// console.log(typeof function () {}); //function
// console.log(typeof function abc() {}); //function
// console.log(typeof (() => {})); //function

// console.log("5" * Infinity); // Infinity
// console.log("5" - Infinity); // -Infinity
// console.log("5" + Infinity); // 5Infinity
// console.log("5" * Infinity); // Infinity

// console.log("5" - undefined); // NaN
// console.log("5" + undefined); // 5undefined
// console.log("5" * undefined); // NaN
// console.log("5" / undefined); // NaN

// console.log("5" - null); // 5
// console.log("5" + null); // 5null
// console.log("5" * null); // 0
// console.log("5" / null); // Infintiy

// console.log("3" > 2); //true

// console.log(NaN); // NaN
// console.log(typeof NaN); // number

// console.log(typeof(a * null)); // number
// console.log(typeof(a / 0)); // number
// console.log(typeof(a / undefined)); // number
// console.log(typeof(a + undefined)); // number
// console.log(typeof(a - undefined)); // number

// console.log(typeof (null * null)); // number
// console.log(typeof (undefined / undefined)); // number

// console.log(typeof(b * null)); // number
// console.log(typeof(b / 0)); // number
// console.log(typeof(b / undefined)); // number
// console.log(typeof(b + undefined)); // string
// console.log(typeof(b - undefined)); // number

// console.log(typeof typeof a); // String
// console.log(typeof typeof null); //String

// console.log(typeof []); // object
// console.log([1, 2] + [3, 4]); // 1,23,4;

// console.log([] + {}); // [object Object];
// console.log({} + []); // [object Object];

// console.log((123) + (123)) // 246

// console.log((123) + [1,2,3]); // 1231,2,3

// console.log(typeof []); //object
// console.log(typeof null); //object
// console.log(typeof {}); //object
// console.log(typeof this); // object

// console.log(Object.prototype.toString.call([])); // "[object Array]"
// console.log(Object.prototype.toString.call(null)); // "[object Null]"
// console.log(Object.prototype.toString.call({})); // "[object Object]"

// console.log(this);
// console.log(window);  // error!  this is node js .. not a browser
// console.log(globalThis); // node js broswer engine gobal object

// console.log([] == false); //true;
// console.log([] == ![]); //true;
// console.log("" == true); //true;

// console.log([1, 2, 3].toString()); //1,2,3
// console.log([1, 2, 3].join("-")); //1-2-3

// const arr = [1, 2, 3];
// arr[10] = 99;
// console.log(arr.length);
// console.log(arr);

// console.log("hello" instanceof String); //false
// console.log(new String("hello") instanceof String); // ture

// console.log(0 == false); // true
// console.log(0 === false); // false

// const obj = { a: 1 };
// console.log("a" in obj); // false

// const yy = () => {};
// console.log(typeof yy); // function

// (function () {
//   let a = b = 3;
// })();
// console.log(typeof b);

// async function test() {
//   return 42;
// }
// test().then(console.log);

// const { x = 10, y = 20 } = { x: 5 };
// console.log(x, y);

// console.log([] == []);
// console.log({} == {});
