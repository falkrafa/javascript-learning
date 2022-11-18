let grade1 = 7;
let grade2 = 8;
let grade3 = 9;
let finalGrade = ((grade1 + grade2 + grade3) / 3).toFixed(2);
let UserName = 'Rafael';

//normal
if (finalGrade >= 7) {
  console.log(`Congratulations ${UserName} your final grade is ${finalGrade}`);
} else {
  console.log(`F ${UserName} your final grade is ${finalGrade}`);
}

//ternario
console.log(
  finalGrade >= 7
    ? `Congratulations ${UserName} your final grade is ${finalGrade}`
    : `F ${UserName} your final grade is ${finalGrade}`
);
