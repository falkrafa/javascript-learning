function age(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

let result = age(10);

result ? console.log('maior de idade') : console.log('menor de idade');
