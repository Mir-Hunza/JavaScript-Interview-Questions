// Question No.14 "Find the maximum of three numbers using nested ternary operators."

function findMaxOfThreeNumbers(a, b, c) {
  return a > b ? (a > c ? a : c) : (b > c ? b : c);
}

let num1 = 15;
let num2 = 10;
let num3 = 12;
let maxNumber = findMaxOfThreeNumbers(num1, num2, num3);

console.log(`The maximum of ${num1}, ${num2}, and ${num3} is: ${maxNumber}`);
