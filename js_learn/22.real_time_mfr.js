const users = [
  { firstName: "Sathiya", lastName: "Seelan", age: 21 },
  { firstName: "Yashica", lastName: "Saravan", age: 20 },
  { firstName: "Srisuthi", lastName: "Palani", age: 21 },
  { firstName: "ShahidKhan", lastName: "Saleem", age: 1 },
  { firstName: "Thissya", lastName: "Murugasen", age: 50 },
];

const names = users.map((x) => x.firstName + " " + x.lastName);
console.log(names);

const agesCount = users.reduce((arr, cur) => {
  if (arr[cur.age]) {
    arr[cur.age] += 1;
  } else {
    arr[cur.age] = 1;
  }
  return arr;
}, {});

console.log(agesCount);

const ageFilter = users.filter((x) => x.age > 20);
console.log(ageFilter);

const chaining = users.filter((x) => x.age > 20).map((x) => x.firstName);
console.log(chaining);
