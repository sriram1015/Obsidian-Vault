const cart = ["shirt", "pant", "shoe"];

orderItem(cart, function () {
  proceedToPayment(orderId, function () {
    showOrderSummary(paymentInfo, function () {
      walletUpdation(orderSummary);
    });
  });
});


