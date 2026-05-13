// /**
//  * What is async?
//  * what is await?
//  * how async await works behind the secenes?
//  * Example of using async /await
//  * Error handling
//  * Interview
//  * Async await vs Promise.then/.catch
//  */

// // ------------I.) Async-----------
// /**
//  * async is keword.
//  * that is used before the func to create a async function.
//  * always return a promise.
//  * Two possible ways to return 1. promise 2. non-promise(automatically wrapped with the promise);
//  */

// const pr = new Promise((resolve, reject) => resolve("Promise Resolved value"));
// async function getData() {
// return "Hello Sathiya";
// return pr;
// }

// const data = getData();
// console.log(data);
// data.then((val) => console.log(val)).catch((err) => console.log(err));

// // --------------- II.)  await -------------
// /**
//  * Async and await is used to handle the promise
//  * await -> infront of the promise that has to be resolved
//  * await is keyword,
//  * await is only be used inside an async function
//  */

// const pr = new Promise((resolve, reject) =>
//   reject("Promise Resolved value!!!!")
// );
// // handle befor async await
// function getData() {
//   pr.then((res) => console.log(res));
// }
// getData();

// // // handle after using async await
// async function handleAsync() {
//   try {
//     const response = await pr;
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// }
// handleAsync();

// // -------------- III Async and await ----

const pr = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("Promise Resolved value!!!!");
  }, 20000)
);
const pr2 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("Promise Resolved value!!!!");
  }, 1000)
);
// // handle befor async await
// function getData() {
//   pr.then((res) => console.log(res));
//   console.log("Hey Buddy, What's up!!");
// }
// getData();

// // handle after using async await
async function handleAsync() {
  // Js Engine was waiting for promise to resolved is not true
  console.log("Top of the line");
  const response = await pr;
  console.log(response);
  console.log("Hey what a magic!!!!");

  const response2 = await pr;
  console.log(response2);
  console.log("Hey what a magic!!!!------2");
}
handleAsync();

// // -------------IV.) Real time case----------

// // const API_URL = "https://api.github.com/users/sathiyaseelan0712";
// const API_URL = "https://invaliaifs";
// async function handlePromise() {
//   // Fetch() ==> Response.json() => jsonValue;

//   //   fetch()
//   //     .then((res) => res.json())
//   //     .then((res) => console.log(res));
//   //   try {
//   const data = await fetch(API_URL);
//   const jsonValue = await data.json();
//   console.log(jsonValue.login);
//   //   } catch (err) {
//   //     console.error(err);
//   //   }
// }

// handlePromise().catch((err) => console.error(`Error ${err}`));
