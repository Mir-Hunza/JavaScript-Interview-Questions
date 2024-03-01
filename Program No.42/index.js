// Question No.42 " Take an array of strings, filter out the ones with a length less than 5, and then capitalize the remaining strings using the `map` method."

let originalArray = ["apple", "banana", "kiwi", "orange", "grape"];

let filteredArray = originalArray.filter(str => str.length >= 5);

let capitalizedArray = filteredArray.map(str => str.toUpperCase());

console.log('Original Array:', originalArray);
console.log('Filtered Array:', filteredArray);
console.log('Capitalized Array:', capitalizedArray);
