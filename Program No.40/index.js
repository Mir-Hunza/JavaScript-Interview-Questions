// Question No.39 "Discuss the importance of immutability when working with array methods. Demonstrate how you would perform immutable operations using methods like `map` or `filter`."

let numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(num => num * num);

console.log('Original Array:', numbers);
console.log('Squared Numbers (Immutable):', squaredNumbers);

let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log('Original Array:', numbers);
console.log('Even Numbers (Immutable):', evenNumbers);
