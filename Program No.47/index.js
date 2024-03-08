// Question No.47 "Implement a function that takes an array of objects with 'age' properties and returns an array of those who are adults (age 18 and above) using the `filter` method."

function filterAdults(people) {

  let adults = people.filter(person => person.age >= 18);
  return adults;
}

let peopleArray = [
  { name: 'John', age: 25 },
  { name: 'Alice', age: 16 },
  { name: 'Bob', age: 30 },
  { name: 'Eva', age: 17 }
];

let adultsArray = filterAdults(peopleArray);

console.log('Original Array of People:', peopleArray);
console.log('Array of Adults:', adultsArray);
