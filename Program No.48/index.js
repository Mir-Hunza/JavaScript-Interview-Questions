// Question No.48 "Implement a function that takes an array of objects with 'age' properties and returns an array of those who are adults (age 18 and above) using the `filter` method."

let arrayOfStrings = ['apple', 'banana', 'kiwi', 'orange', 'grape'];

let sortedArray = arrayOfStrings.sort((a, b) => {

  if (a.length !== b.length) {
    return a.length - b.length;
  } else {

    return arrayOfStrings.indexOf(a) - arrayOfStrings.indexOf(b);
  }
});

console.log('Original Array of Strings:', arrayOfStrings);
console.log('Sorted Array based on Lengths:', sortedArray);

