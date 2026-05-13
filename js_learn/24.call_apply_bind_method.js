// let name1 = {
//   firstName: "Sathiya",
//   lastName: "Seelan",
//   printFullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// name1.printFullName();

// let name2 = {
//   firstName: "Yashica",
//   lastName: "Saravana",
//   printFullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// // name2.printFullName();
// name1.printFullName.call(name2)

// ----------------I. Call-----------
let printfn = function (location, phoneNo) {
  console.log(
    this.firstName + " " + this.lastName + " from " + location + ", " + phoneNo
  );
};

let name1 = {
  firstName: "Sathiya",
  lastName: "Seelan",
};

let name2 = {
  firstName: "Yashica",
  lastName: "Saravana",
};

printfn.call(name1, "Madurai", "9042252093");
printfn.call(name2, "Hosur", "9876543210");

printfn.apply(name1, ["Madurai", "9042252093"]);

// -------------III.) Bind
let printName = printfn.bind(name1, "Madurai", "9042252093");
console.log(printName);
printName();
