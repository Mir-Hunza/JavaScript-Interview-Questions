// Question No.5 "Find the sum of all positive numbers in an array."

function sumOfPositiveNumbers(arr) {
  
  const positiveNumbers = arr.filter(number => number > 0);

  const sum = positiveNumbers.reduce((accumulator, current) => accumulator + current, 0);

  return sum;
}

const myArray = [1, -2, 3, -4, 5];
const result = sumOfPositiveNumbers(myArray);

console.log("Sum of positive numbers:", result);
