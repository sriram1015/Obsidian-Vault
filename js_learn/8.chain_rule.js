function a() {
  b = 3;
  c();
  function c() {
    console.log(b);
    b = 5;
    d();

    function d() {
      b = 1000;
      console.log(b);
    }
    console.log(b);
  }
  console.log(b);
}
a();
var b = 10;
console.log(b);
