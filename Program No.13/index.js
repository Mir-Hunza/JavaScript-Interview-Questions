// Question No.13 "Check if a number is even or odd and return a corresponding message."

function checkEvenOrOdd(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return "Invalid input. Please provide a valid number.";
  }

  if (number % 2 === 0) {
    return `${number} is even.`;
  } else {
    return `${number} is odd.`;
  }
}

let testNumber = 7;
let result = checkEvenOrOdd(testNumber);
console.log(result);
