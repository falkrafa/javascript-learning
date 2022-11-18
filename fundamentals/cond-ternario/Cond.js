const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

//exercise 1
let price = 40.3;

if (price <= 45) {
  console.log('cheap');
} else {
  console.log('expensive');
}
//user input
//conditions
readline.question('Age?', (age) => {
  if (age >= 18 && age < 60) {
    console.log('you are an adult');
  } else if (age <= 17) {
    console.log('under age');
  } else if (age >= 60) {
    console.log('Old');
  }
  readline.close();
});
