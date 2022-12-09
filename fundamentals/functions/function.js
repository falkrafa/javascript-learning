function sum(a, b) {
  console.log(a + b);
}
function mult(a, b) {
  console.log(a * b);
}
function div(a, b) {
  result = (a / b).toFixed(2);
  console.log(parseFloat(result));
}
function min(a, b) {
  console.log(a - b);
}

let a = 7;
let b = 3;

sum(a, b);
mult(a, b);
div(a, b);
min(a, b);
