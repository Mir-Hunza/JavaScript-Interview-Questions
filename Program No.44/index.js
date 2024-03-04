// Question No.44 "Use the `reduce` method to find the total sum of all even numbers in an array of integers."

let arrayOfIntegers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumOfEvenNumbers = arrayOfIntegers.reduce((sum, num) => {
  if (num % 2 === 0) {
    return sum + num; 
  } else {
    return sum; 
  }
}, 0);

console.log('Array of Integers:', arrayOfIntegers);
console.log('Sum of Even Numbers:', sumOfEvenNumbers);

  
