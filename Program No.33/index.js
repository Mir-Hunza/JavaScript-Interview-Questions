// Question No.33 "Describe the purpose of the `reduce` method and provide an example where you use it to compute a single value from an array of numbers."

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
}, 0);

console.log(sum); 




