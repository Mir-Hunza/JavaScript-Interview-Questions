// Question No.36 "Implement a function that takes an array of objects with 'age' properties and returns an array of those who are adults (age 18 and above) using the `filter` method."

const filterAdults = (people) => {
  return people.filter(person => person.age >= 18);
};

const peopleArray = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 16 },
  { name: 'Bob', age: 30 },
];

const adultsArray = filterAdults(peopleArray);

console.log(adultsArray);


