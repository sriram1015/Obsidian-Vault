x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  x = 100;
  console.log(x);
  xyz();
  
  function xyz(){
    console.log(y);
  }
  var y = 10;
  console.log(y);
}

console.log(x);

var x;
