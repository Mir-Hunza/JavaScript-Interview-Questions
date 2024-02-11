// Question No.25 "Write a for...in loop that iterates over the properties of an object and logs each property name and value."

const person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Developer'
};

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}



