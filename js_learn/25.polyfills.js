let name1 = {
  firstName: "Sathiya",
  lastName: "Seelan",
};

let printfn = function (homeTown, phoneNo, location) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      homeTown +
      ", " +
      phoneNo +
      " " +
      location
  );
};

let print1 = printfn.bind(name1, "Madurai", "9042252093");
print1("TamilNadu");

Function.prototype.mybind = function (...args) {
  let obj = this;
  param = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...param, ...args2]);
  };
};

let print2 = printfn.mybind(name1, "Madurai", "9042252093");
print2("TamilNadu");
