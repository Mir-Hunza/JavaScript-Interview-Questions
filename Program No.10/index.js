// Question No.10 "Calculate the factorial of a number using a do-while loop."

function factorial(n) {

  if (n < 0 || !Number.isInteger(n)) {
    return "Invalid input. Please provide a non-negative integer.";
  }

  let result = 1;
  let i = 1;

  // Calculate factorial using a do-while loop
  do {
    result *= i;
    i++;
  } while (i <= n);

  return result;
}

let number = 5;
let result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
