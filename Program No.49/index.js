// Question No.49 "Given an array of arrays containing numbers, use a combination of array methods to flatten the structure and then calculate the sum of all the numbers."

let arrayOfArrays = [[1, 2, 3], [4, 5], [6, 7, 8]];

let flattenedArray = arrayOfArrays.flat();

let sumOfNumbers = flattenedArray.reduce((sum, num) => sum + num, 0);

console.log('Original Array of Arrays:', arrayOfArrays);
console.log('Flattened Array:', flattenedArray);
console.log('Sum of Numbers:', sumOfNumbers);


