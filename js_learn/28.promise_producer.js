// const cart = ["shirt", "T-shirt", "pant"];
const cart = [];
// -----------------------consumer part--------------
const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  // .catch((err) => {
  //   console.log(err);
  // })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .finally(function () {
    console.log("Time, tide and javascript waits for none");
  });

// ---------------Producer part----------
function validateCart(cart) {
  return cart.length !== 0;
}
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // validate cart
    if (!validateCart(cart)) {
      const err = new Error("Cart is invalid");
      reject(err);
    }
    const orderId = 10001;
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successfully Done!!!!!");
  });
}
