// Question No.35 "Create a chain of array methods to find the average of all positive numbers in an array of mixed integers and return the result rounded to two decimal places."

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


