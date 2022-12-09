function Calcprct(x, y) {
  return (y / x) * 100;
}

let x = 40;
let y = 10;

let prct = Calcprct(x, y);
console.log(`${prct}% de ${x} é ${y}`);
