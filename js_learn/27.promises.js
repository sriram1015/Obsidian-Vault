// const cart = ["shirt", "pants", "shoe"];

// createOrder(cart, function () {
//   proceedToPaymeny(orderId);
// });

// const promise = createOrder(cart);
// // {promise : uundefined}
// promise.then(function (orderId) {
//   console.log(orderId);
// });

// const GITHUB_API = "https://api.github.com/user/sathiyaseelan0712";

// const user = fetch(GITHUB_API);
// console.log(user);

const cart = ["shirt", "pant", "shoe"];

orderItem(cart, function () {
  proceedToPayment(orderId, function () {
    showOrderSummary(paymentInfo, function () {
      walletUpdation(orderSummary);
    });
  });
});

const promise = orderItem(cart);

promise
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((orderSummary) => walletUpdation(orderSummary));
