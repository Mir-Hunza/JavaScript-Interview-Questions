// Question No.38 "How would you handle potential errors when using array methods like `find` or `reduce`? Provide an example of error handling in such a scenario."

let numbers = [1, 2, 3, 4, 5];

try {
  
  let sum = numbers.reduce((acc, num) => {
    if (typeof num !== 'number') {
      throw new Error('Invalid element type'); 
    }
    return acc + num;
  }, 0);

  console.log('Sum:', sum);
} catch (error) {
  console.error('Error:', error.message);
}
