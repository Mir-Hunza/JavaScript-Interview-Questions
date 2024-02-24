// Question No.37 "Explain the concept of callback functions in the context of array methods. Provide an example of using a callback function with the `map` method."

let mixedArray = [5, -2, 10, 8, -3, 7, -1, 4];

let averageOfPositiveNumbers = mixedArray
  .filter(num => num > 0)
  .reduce((sum, num, index, array) => {
    sum += num;
    if (index === array.length - 1) {
      return sum / array.length;
    } else {
      return sum;
    }
  }, 0);

let roundedResult = averageOfPositiveNumbers.toFixed(2);

console.log(roundedResult);

