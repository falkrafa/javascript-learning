function calc(m2, quartos) {
  if (quartos === 1) {
    return m2 * 3000 * 1;
  } else if (quartos === 2) {
    return m2 * 3000 * 1.2;
  } else if (quartos === 3) {
    return m2 * 3000 * 1.5;
  }
}

let m2 = 123;
let quartos = 3;

let price = calc(m2, quartos);

console.log(`A casa custa ${price}`);
