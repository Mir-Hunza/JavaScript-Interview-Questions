// Question No.17 "Define a function calculateAverage that takes an array of numbers as an argument and returns the average value.?"

function calculateAverage(numbers) {
  
  if (numbers.length === 0) {
    return 0; 
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);

  const average = sum / numbers.length;

  return average;
}

const numbersArray = [5, 10, 15, 20];
const result = calculateAverage(numbersArray);
console.log(result); 
